# Trello Clone

In this overview I go through some of the parts of the Application that I found interesting from a developers view.
## Libraries

- **Backbone** = for front-end code structure, it lets you easily modulerize your app based on different views that are bound to different pieces of data (models and collections).

- **Handlebars** = templateing engine.

- **jQuery ui** = for the drag-and-drop feature and the calender widget. We already use jQuery in this project so this fits the cose-style and it pretty much covers everything we need.

- **momentjs** = easily format time for display, and helps add the time to the jQuery datepicker.

- **Font Awesome** = for icons.

## Backend Data

We divided the persistent data into four json files:

- `cards.json`
 ```json
  {
    "id":1,
    "time":"2017-08-20T01:05:06.331Z",
    "due":"",
    "description":"Description Body",
    "labels":[1, 2, 3],
    "comments":[{"time":"2017-08-20T06:29:09.530Z","body":"Just a comment"}],
    "subscribed":false,
    "modified":false,
    "title":"First Card",
    "listId":1,
    "listPosition":1
  }
```

- `lists.json`
```json
  {
    "id":1,
    "title":"Stuff To Try"
  }
```

- `labels.json`
```json
  {
    "id":1,
    "color":"green",
    "title":"Green"
  }
```
- `colors.json`
```json
  ["green",
  "yellow",
  "orange"]
```

Cards can change lists so I set them up independently with the card having a reference to the list it belongs to, which can be changed.

Labels are also a seperate entity and multiple cards use the same label, so the each card holds a reference to the labels that are assigned to it.

Colors are a simple array eith the availabe colors that labels can be created from.

Comments can only belong to one card, so its not in its own json file

## Endpoints

We have one routes file to with all the endpoints to interact with the above resourses with get post put and delete as appropiate.

 |method|path|description|
 |---|---|---|
 | get| '/' | at page load which gets all the resourses.|
 | post|    '/lists' |     creates a new list|
 | post |    '/cards' |      creates a new card|
 | put |     '/cards' |      updates multiple cards|
 | put |     '/cards/:id'|   updates card|
 | delete |  '/cards/:id' |  deletes card|
 | post |    '/labels' |     creates a new label|
 | delete |  '/labels:id' |  deletes label|

## Frontend Data

  `App.cards`
  `App.labels`
  These are parallel to the backend data converted into Backbone collections.

  `App.colors`
  Same as the backend, because there isnt much behaviour involved with it, it remains a simple array.

  `App.lists`
  We get it from the lists on the backend and we add a cards collection containing the cards that belong to that list.

  `App.modifiedCards`
  Has all the cards that the user subscribed to follow changes, and have been modified.

  We also have a collection to hold all the cards that match a search term, but since we don't need to access it from multiple views, it's assigned as the `searchView`'s collection, not as a property to `App`.

## Model/Collection View Communication

  Each view is bound to a model or collection which it can access and modify it's attributes.

  Some of the views need access to multiple collections.

  For exampe the `addCardView` and `addListView` can access `App.cards` and `App.lists` to create the new card and list.

  Another example is the `labelsView`, when the user clicks the labels button in the `cardDetailsView` all the labels are shown, while the labels that are assigned to the current card are checked, in addition you have the option to create new labels. so it needs access to `App.colors`, `App.labels`, and the current card model.

  Another example is the `moveCard` and `copyCard`, that need access to all the `lists` to give the user options where to place the card.

## Client and server communication
I used Backbone's `create`, `save`, `destroy`, methods to update the server.

There are times where I update multple models at once (while sorting a list.) so I loop through the models in the collection and save each one to the server.

I looked for a way to update them with one request, but Bakbone doesn't come with a `save` method for collections, and while it's possible to make a custom one, [from here](https://stackoverflow.com/questions/14492226/backbone-js-sync-cant-find-the-url-property) it seems like Backbone is not designed for this.

## Sorting Cards

When we move a card to a specific position within a list, we need to update the `listPosition` property for all the cards in that list.

In the `App` object we have a `sortList` method, that accepts a `listId` as a parameter and loops through all the cards in the list and sets its `listPosition` property based on the index of the card in the collection.

We also have a `moveCard` method that accepts a `cardId`, `listId`, and `position`, and inserts the card into the new list at the correct index, then calls the `sortList` method with all the lists that need to be updated.

There are multiple places in the app that need to sort lists and I tried to keep them as similer as possible:

- **Drag and drop**
  We get the `cardId`, `listId` and `position` from jquery, based on where the card element is within the `DOM`.

- **Move a card from the `moveCard` view**
  We get the `cardId` from the model, and the `listId` and `position` from the user selected options.

- **Copy a card**
  We create a new card with the attributes from the original card, while the `listId` and `position` we get from the user selected options.

- **Delete a card**
  We destroy the card, and get the `listId` from the card.

  In the first three items we fire a `moveCard` event on `App`, which calls the `moveCard` method. When we delete a card we fire a `sortList` event which calls the `sortList` method.

## Labels
We have a Backbone `labels` collection with `color` and `title` attributes, each card has a `labels` property that is an array of integers refering to ids of the models in the labels collection.
If the user deletes a label, it triggers an event on the `App`, and in the handler we loop through all the cards and remove any reference to that label.

```javascript
removeLabel: function(labelId) {
    this.cards.each(function(card) {
        card.save({ labels: _.without(card.get('labels'), labelId) });
    });
}
```

## Comments

The only functionality with comments is that they can be added and it sholud be displayed along with the time, in the correct order. so for every comment added we add a simple object with the comment body and time to the begging of the cards `comments` attribute which is an array. In addition because the app is only built for one user, I hardcoded a placeholder name 'John Doe' thats displayed above every comment.

## Subscribe

Each card has `subscribe` and `modified` boolean attributes that gets saved on the server.

A card's `modified` attribute can only be set to `true` if its not `subscribed`,
so a card that gets set to `subscribe = false` will automatically set `modified = false`.

When a card's `modified` attribute is set to `true` the card gets added to the `modifiedCards` collection.

There are three notifications related views:
  - **`notificationsView`**
  The button thats on the page from when it first loads, when the `modifiedCards` collection gets updated, this view listens for the event and updates the color based on if there is anything in the collection.

  - **`notificationsContainerView`**
 When the notifications button is clicked it will display a box with the resulting cards if any or a message that there isn't, it can also remove itself if the `x` or one of the results are clicked. after it renders itself with its content it will reset the collection so the button will turn blue again, you can still see the list till its closed.

  - **`NotificationsResultView`**
  Each result will have it's card displayed as a seperate view and when clicking on a card it will take you to the card details view.

(note that in trello.com only the changes made by other users are kept track of, and being that I don't have any shared cards, I couldn't really check it out, and some of the functionality may be different)

## Showing and Closing Views

There are different types of views that are handled differently when displaying and closing them:

- **card details**

  The `router` navigates to the `/cards/:id` when clicking on the card, and when closing it the router navigates to the root.

  There are two ways to close a card, by clicking on the 'x' or by clicking on the overlay outside of the card that covers the whole window, so we attach one click event handler to the `x` that closes the view, and another to the entire view (which covers the whole window), and within the handler we check if the element is th eoverlay.

- **edit title**

  Similar to the card details there is an overlay and the 'x' and the same two click events.

- **notifications/search results**

  Like the previous views we want to close them when we click elsewhere on the screen, but unlike the previous views the view doesn't cover the entire window, so we make the view a property of the `App` object, and attach a click event to the `body` element that closes the view, then in the actual view we have a click event handler within which we call 'stopPropagation()' which will stop it from triggering the click event on the `body` element.

  In the search view we also want to clear the input field when we close the result box so we costumize the `remove` method.

```javascript
remove: function() {
    Backbone.View.prototype.remove.apply(this);
    this.$input.val('');
},
```

- **pop-over to edit a field within the card details view**

  In the `cardDetailsView` we have several popups for editing different fields of the card (due-date, labels, etc.), we only want one displayed at a time, so we assign the popup view as a property on the `cardDetailsView`, and every time we open a new one we close any existing ones and assign the new one to the card details view ppup property.

## Future improvements

Some of the more complex styles that don't effect the functionality I haven't yet implemented.

I can also put some more thought into the organizing the html and css.
