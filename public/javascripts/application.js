var App = {
  init: function() {
    this.cards = new Cards(cards);
    this.lists = new Lists(lists);
    this.colors = colors;
    this.labels = new Labels(labels);
    this.populateLists();
    this.view = new MainView({ collection: this.lists });

    this.modifiedCards = new Cards();
    this.populateModifiedCards();
    this.notificationsView = new NotificationsView({ collection: this.modifiedCards });

    this.searchView = new SearchView({ collection: new Cards() });

    this.bindEvents();
  },
  bindEvents: function() {
    _.extend(this, Backbone.Events);

    this.on('removeLabel', this.removeLabel);
    this.on('moveCard', this.moveCard);
    this.on('sortList', this.sortList);
    this.on('unsubscribe', this.unsubscribe);
    this.on('popOver', this.popOver.bind(this));

    $('body').on('click', this.removePopOver.bind(this));
    this.listenTo(this.cards, 'change:title change:description change:comments change:due change:labels', this.setModified);
  },
  populateLists: function() {
    this.cards.each(function(card) {
      var listId = card.get('listId');
      this.lists.get(listId).cards.add(card);
    }.bind(this));
  },
  populateModifiedCards: function() {
    this.modifiedCards.add(this.cards.where({ modified: true }));
  },
  removePopOver: function() {
    this.popOverView && this.popOverView.remove();
  },
  popOver: function(view) {
    this.removePopOver();
    this.popOverView = view;
  },
  removeCard: function(card) {
    var listId = card.get('listId');
    var list = this.lists.get(listId);

    this.sortList(listId);
  },
  showCardDetails: function(id) {
    var card = this.cards.get(id);
    this.cardDetailsView = new CardDetailsView({ model: card });
  },
  removeModal: function() {
    if (this.cardDetailsView) {
      this.cardDetailsView.remove();
    }
  },
  removeLabel: function(labelId) {
    this.cards.each(function(card) {
      card.save({ labels: _.without(card.get('labels'), labelId) });
    });
  },
  moveCard: function(cardId, listId, position) {
    var card = this.cards.get(cardId);
    var list = this.lists.get(listId);
    var prevListId = card.get('listId');
    var prevList = this.lists.get(prevListId);

    prevList.cards.remove(card);
    list.cards.add(card, { at: position - 1 });

    if (prevListId !== listId) {
      this.sortList(prevListId, true);
    }

    this.sortList(listId);
  },
  sortList: function(listId, more) {
    var list = this.lists.get(listId);
    list.cards.each(function(card, index) {
      card.save({
        listId: listId,
        listPosition: index + 1
      });
    });

    if (!more) {
      this.lists.trigger('listsUpdated');
    }
  },
  setModified: function(card) {
    if (card.get('subscribed')) {
      card.save({ modified: true });
      this.modifiedCards.add(card);
    }
  },
  unsubscribe: function(card) {
    card.save({ modified: false });
    this.modifiedCards.remove(card);
  }
};

App.init();