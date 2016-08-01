var Entry = require("./../js/entry.js").entryModule;

$(document).ready(function() {
  $("#entry-form").submit(function(event) {
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    var newEntry = new Entry(title, body);
    $('.output').prepend("<h2>" + newEntry.title + "</h2>");
    $('.output').prepend("<p>" + newEntry.body + "</p>");

  });
});
