var router = new (Backbone.Router.extend({
  routes: {
    '': 'removeModal',
    'cards/:id': 'cardDetails',
  },
  cardDetails: function(id) {
    App.showCardDetails(+id);
  },
  removeModal: function() {
    App.removeModal();
  }
}))();

Backbone.history.start({
  pushState: true
});
