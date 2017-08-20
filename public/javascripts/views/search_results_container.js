var SearchResultsContainerView = Backbone.View.extend({
  className: 'search-results',
  template: JST.search_results,
  render: function() {
    this.$el.html(this.template());
    App.trigger('popOver', this);
  },
  renderResults: function() {
    this.$('ul.list').html('');
    this.collection.each(function(card) {
      this.$('ul.list').append(new SearchResultView({ model: card }).$el);
    }.bind(this));
  },
  remove: function() {
    Backbone.View.prototype.remove.apply(this);
    this.$input.val('');
  },
  initialize: function(options) {
    this.$input = options.$input;
    this.render();
    this.listenTo(this.collection, 'reset', this.renderResults);
  }
});