var Entry = require("./../js/entry.js").entryModule;

$(document).ready(function() {
  $("#entry-form").submit(function(event) {
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    $('#title').val("");
    $('#body').val("");
    var newEntry = new Entry(title, body);
    $('.output').prepend("<p>Vowels: " + newEntry.vowelCount());
    $('.output').prepend("<p>Words: " + newEntry.wordCount());
    $('.output').prepend("<p>Consonants: " + newEntry.consonantCount());
    $('.output').prepend("<p>" + newEntry.body + "</p>");
    $('.output').prepend("<h2>" + newEntry.title + "</h2>");
  });
});
