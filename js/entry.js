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
