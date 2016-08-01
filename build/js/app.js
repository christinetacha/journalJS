(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Entry(title, body) {
  this.title = title;
  this.body = body;
}

Entry.prototype.wordCount = function() {
  var bodyArray = this.body.split(" ");
  return bodyArray.length;
};

Entry.prototype.vowelCount = function() {
  var numberOfVowels = 0;
  this.body = this.body.toLowerCase();
  for(i = 0; i < this.body.length; i++) {
    if(this.body[i] == "a" || this.body[i] == "e" || this.body[i] == "i" || this.body[i] == "o" || this.body[i] == "u") {
      numberOfVowels+=1;
    }
  }
  return numberOfVowels;
};

Entry.prototype.consonantCount = function() {
  var numberOfConsonants = 0;
  this.body = this.body.toLowerCase();
  this.body.replace("[.,;:''?! ]", "");
  return this.body.length - this.vowelCount();
}

exports.entryModule = Entry;

},{}],2:[function(require,module,exports){
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

},{"./../js/entry.js":1}]},{},[2]);
