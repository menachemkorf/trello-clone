var ListView = Backbone.View.extend({
  template: JST.list,
  attributes: function() {
    return {
      'class': 'col',
      'data-id': this.model.id,
    };
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    this.model.cards.each(function(card) {
      this.$('ul.list').append((new CardView({ model: card })).$el);
    }.bind(this));
    this.$el.append(new AddCardView({ model: this.model }).$el);
  },
  initialize: function() {
    this.render();
    this.listenTo(this.model, 'listUpdated', this.render);
  }
});