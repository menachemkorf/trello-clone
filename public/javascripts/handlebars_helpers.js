Handlebars.registerHelper('format_date_time', function(date) {
  return moment(date).format('MMM D [at] h:mm a');
});

Handlebars.registerHelper('format_date', function(date) {
  return moment(date).format('MMM D');
});
