var EditDueDateView = Backbone.View.extend({
  className: 'pop-over date',
  template: JST.edit_due_date,
  events: {
    'click .close': 'close',
    'focusout #alternate-date': 'updateDatePicker',
    'submit form': 'setDate',
    'click .remove': 'removeDate'
  },
  close: function(e) {
    e.stopPropagation();
    this.remove();
  },
  removeDate: function(e) {
    e.preventDefault();

    this.model.save({ due: '' });
    this.remove();
  },
  updateDatePicker: function() {
    var dateStr = $('#alternate-date').val();
    this.$( "#datepicker" ).datepicker( "setDate",  dateStr);
  },
  setDate: function(e) {
    e.preventDefault();

    var selectedDate = $( "#datepicker" ).datepicker( "getDate" );
    var timeStr = this.$('#time').val();
    var hour = moment(timeStr, ["h:mm A"]).format("HH");
    var minute = moment(timeStr, ["h:mm A"]).format("mm");

    var date = moment(selectedDate).hours(+hour).minutes(+minute);

    this.model.save({ due: date.toDate() });
    this.remove();
  },
  render: function() {
    this.$el.html(this.template());
    this.setDatePicker();
  },
  setDatePicker: function() {
    var date;
    if (this.model.get('due')) {
      date = new Date(this.model.get('due'))
    } else {
      date = new Date();
    }

    this.$("#datepicker").datepicker({
      dateFormat: "m/d/yy",
      altField: "#alternate-date",
      altFormat: "m/d/yy",
      changeMonth: true,
      changeYear: true,
      defaultDate: date
    });

    var formatedDate = moment(date).format('M/D/YYYY');
    this.$("#alternate-date").val(formatedDate);
  },
  initialize: function(options) {
    this.$el.css({
      top: options.offset.top,
      left: options.offset.left
    });
    this.render();
  }
});