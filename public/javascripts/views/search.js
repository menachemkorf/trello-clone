var SearchView = Backbone.View.extend({
  el: '.search',
  resultsTemplate: JST.search_results,
  events: {
    'click': 'keep',
    'focusin input': 'renderResultContainer',
    'keyup input': 'search',
  },
  keep: function(e) {
    e.stopPropagation();
  },
  search: function(e) {
    var term = $(e.target).val().trim().toLowerCase();

    if (!term.length) {
      this.collection.reset();
      return;
    }

    var matched = App.cards.filter(function(card) {
      return card.get('title').toLowerCase().indexOf(term) > -1 ||
              (card.get('description') &&
               card.get('description').toLowerCase().indexOf(term) > -1);
    });

    this.collection.reset(matched);
  },
  renderResultContainer: function() {
    this.$el.append(new SearchResultsContainerView({
      collection: this.collection,
      $input: this.$('input')
    }).$el);
  }
});