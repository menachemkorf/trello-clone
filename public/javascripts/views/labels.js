var LabelsView = Backbone.View.extend({
  className: 'pop-over',
  attributes: {
    id: 'labels-modal'
  },
  template: JST.labels,
  colorsTemplate: JST.colors,
  editColorsTemplate: JST.edit_label,
  events: {
    'click .close': 'close',
    'click .back': 'render',
    'click .create-label': 'renderCreateForm',
    'click .color-palette .color': 'updateColor',
    'submit form#create-label': 'createLabel',
    'click .edit': 'renderEditLabelForm',
    'submit form#edit-label': 'editLabel',
    'click .delete': 'deleteLabel'
  },
  close: function(e) {
    e.stopPropagation();
    this.remove();
  },
  renderCreateForm: function(e) {
    e.preventDefault();
    this.$el.html(this.colorsTemplate({
      colors: this.colors
    }));
  },
  updateColor: function(e) {
    this.$('.color-palette .color').removeClass('checked');
    $(e.target).addClass('checked');
  },
  createLabel: function(e) {
    e.preventDefault();

    var title = this.$('#label-title').val();
    var color = this.$('.color-palette').find('.checked').attr('data-color');
    this.labels.create({
      title: title,
      color: color
    }, {
      success: function() {
        this.render();
      }.bind(this)
    });
  },
  renderEditLabelForm: function(e) {
    var labelId = +$(e.target).closest('li').attr('data-id');
    var labelColor = this.labels.get(labelId).get('color');

    this.$el.html(this.editColorsTemplate({
      colors: this.colors,
      label: this.labels.get(labelId).toJSON()
    }));

    this.$('li[data-color="' + labelColor + '"]').addClass('checked');
  },
  editLabel: function(e) {
    e.preventDefault();

    var labelId = +this.$('form#edit-label').attr('data-id');
    var title = this.$('form#edit-label #label-title').val();
    var color = this.$('form#edit-label .checked').attr('data-color');

    this.labels.get(labelId).save({
      title: title,
      color: color
    });

    this.render();
  },
  deleteLabel: function(e) {
    e.preventDefault();

    var labelId = +this.$('form#edit-label').attr('data-id');
    this.labels.get(labelId).destroy();
    App.trigger('removeLabel', labelId);
    this.render();
  },
  render: function() {
    this.$el.html(this.template());

    this.labels.each(function(label) {
      this.$('ul').append(new LabelView({
        model: label,
        card: this.model,
        colors: this.colors
      }).$el);
    }.bind(this));
  },
  initialize: function(options) {
    this.colors = options.colors;
    this.labels = options.labels;
    this.$el.css({
      top: options.offset.top,
      left: options.offset.left
    });
    this.render();
  }
});