var NotificationsContainerView = Backbone.View.extend({
  className: "notifications-results pop-over",
  template: JST.notifications_results,
  events: {
    'click': 'keep',
    'click .close': 'close',
    'click a.card': 'close'
  },
  keep: function(e) {
    // e.stopPropagation();
  },
  close: function(e) {
    e.stopPropagation();
    this.remove();
  },
  render: function() {
    this.$el.html(this.template());
    this.renderResults();
    App.trigger('popOver', this);
  },
  renderResults: function() {
    this.$('ul.list').html('');
    if (this.collection.length) {
        this.collection.each(function(card) {
        this.$('ul.list').append(new NotificationsResultView({ model: card, parent: this }).$el);
      }.bind(this));
    } else {
      this.$('ul.list').append('<li>No Modified Cards</li>');
    }

    this.collection.each(function(card) {
      card.save({ modified: false });
    });
    this.collection.reset();
  },
  initialize: function() {
    this.render();
  }
});