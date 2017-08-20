var CopyCardView = Backbone.View.extend({
  className: 'pop-over copy-modal',
  template: JST.copy_card,
  events: {
    'click .close': 'close',
    'change #lists': 'changeSelectedList',
    'submit form': 'createCard'
  },
  close: function(e) {
    e.stopPropagation();
    this.remove();
  },
  getPositionOptions: function() {
    var positions = this.selectedList.cards.map(function(card) {
      return card.get('listPosition');
    });

    positions.push(positions.length + 1);
    return positions;
  },
  getListOptions: function() {
    var lists = this.lists.toJSON();
    _.findWhere(lists, { id: this.selectedList.id }).selected = true;

    return lists
  },
  changeSelectedList: function(e) {
    var title = this.$el.find('#new_name').val();
    this.copy.set({ title: title });
    var listId = $(e.target).val();
    this.selectedList = this.lists.get(+listId);
    this.render();
  },
  createCard: function(e) {
    e.preventDefault();

    var listId = +this.$(e.target).find('#lists').val();
    var position = +this.$(e.target).find('#positions').val();

    var title = this.$(e.target).find('#new_name').val();
    var keepComments = this.$(e.target).find('#keep_comments').is(':checked');
    var keepLabels = this.$(e.target).find('#keep_labels').is(':checked');

    this.copy.set({
      title: title,
      listId: listId,
      listPosition: position,
    });

    if (!keepComments) {
      this.copy.set({ comments: [] });
    }

    if (!keepLabels) {
      this.copy.set({ labels: [] });
    }

    var card = App.cards.create(this.copy, {
      success: function() {

        App.trigger('moveCard', card.id, listId, position);
      }.bind(this)
    });

    this.remove();
  },
  newCard: function() {
    var attrs = _.extend({}, this.model.toJSON());
    attrs.id = undefined;
    attrs.subscribed = false;
    var card = new Card(attrs);
    return card;
  },
  render: function() {
    this.$el.html(this.template({
      card: this.copy.toJSON(),
      lists: this.getListOptions(),
      positions: this.getPositionOptions()
    }));
  },
  initialize: function(options) {
    this.lists = options.lists;
    this.copy = this.newCard();
    this.selectedList = this.lists.get(this.model.get('listId'));
    this.$el.css({
      top: options.offset.top,
      left: options.offset.left
    });
    this.render();
  }
});