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
  var bodyText = this.body.toLowerCase();
  for(i = 0; i < bodyText.length; i++) {
    if(bodyText[i] == "a" || bodyText[i] == "e" || bodyText[i] == "i" || bodyText[i] == "o" || bodyText[i] == "u") {
      numberOfVowels+=1;
    }
  }
  return numberOfVowels;
};

Entry.prototype.consonantCount = function() {
  var numberOfConsonants = 0;
  var bodyText = this.body.toLowerCase();
  bodyText.replace("[.,;:''?! ]", "");
  return bodyText.length - this.vowelCount();
}

Entry.prototype.getTeaser = function() {
  var sentenceArray = this.body.split(".");
  var firstSentence = sentenceArray[0];
  var wordArray = firstSentence.split(" ");
  if(wordArray.length <= 8) {
    return firstSentence;
  } else {
    var teaser = "";
    for(i = 0; i < 8; i++) {
      teaser = teaser + wordArray[i] + " ";
    }
    teaser = teaser + "..."
    return teaser;
  }
}

exports.entryModule = Entry;
