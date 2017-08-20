var NotificationsView = Backbone.View.extend({
  el: '.notifications',
  events: {
    'click': 'renderResultContainer'
  },
  renderResultContainer: function(e) {
    e.stopPropagation();
    this.$('.notifications-results').remove();
    this.$el.append(new NotificationsContainerView({ collection: this.collection }).$el);
  },
  activate: function() {
    if (this.collection.length) {
      this.$el.addClass('active');
    } else {
      this.$el.removeClass('active');
    }
  },
  initialize: function() {
    this.listenTo(this.collection, 'add remove reset', this.activate);
  }
});