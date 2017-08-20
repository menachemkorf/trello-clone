var EditTitleView = Backbone.View.extend({
  className: 'overlay',
  template: JST.edit_title,
  events: {
    'submit form': 'updateTitle',
    'click': 'close'
  },
  close: function(e) {
    if (e.target === this.el) {
      this.remove();
    }
  },
  updateTitle: function(e) {
    e.preventDefault();

    var title = this.$('.title').val();
    this.model.set({ title: title });

    this.remove();
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    this.$('.quick-edit').css({
      top: this.offset.top,
      left: this.offset.left
    });
  },
  initialize: function(options) {
    this.offset = options.offset;
    this.render();
  }
});