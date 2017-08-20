var MoveCardView = Backbone.View.extend({
  className: 'pop-over move-modal',
  template: JST.move_card,
  events: {
    'click .close': 'close',
    'change #lists': 'changeSelectedList',
    'submit form': 'updateCard'
  },
  close: function(e) {
    e.stopPropagation();
    this.remove();
  },
  getPositionOptions: function() {
    var positions = this.selectedList.cards.map(function(card) {
      return card.get('listPosition');
    });

    if (this.model.get('listId') !== this.selectedList.id) {
      if (this.selectedList.cards.length) {
        positions.push(_.max(positions) + 1);
      } else {
        positions.push(1);
      }
    }

    return positions;
  },
  getListOptions: function() {
    var lists = this.lists.toJSON();
    _.findWhere(lists, { id: this.selectedList.id }).selected = true;

    return lists
  },
  changeSelectedList: function(e) {
    var listId = $(e.target).val();
    this.selectedList = this.lists.get(+listId);
    this.render();
  },
  updateCard: function(e) {
    e.preventDefault();

    var cardId = this.model.id;
    var listId = +this.$(e.target).find('#lists').val();
    var position = +this.$(e.target).find('#positions').val();

    App.trigger('moveCard', cardId, listId, position);
  },
  render: function() {
    this.$el.html(this.template({
      lists: this.getListOptions(),
      positions: this.getPositionOptions()
    }));
  },
  initialize: function(options) {
    this.lists = options.lists;
    this.selectedList = this.lists.get(this.model.get('listId'));
    this.$el.css({
      top: options.offset.top,
      left: options.offset.left
    });
    this.render();
  }
});