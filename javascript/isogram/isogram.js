var Isogram = function(word) {
  this.word = word;
};

Isogram.prototype.sanitize = function() {
  return this.word.replace(/-| |\n/g, '');
};

Isogram.prototype.inArray = function(value, arr) {
  return arr.indexOf(value) > -1;
};

Isogram.prototype.isIsogram = function() {
  var result = true
    , letters = this.sanitize().split('')
    , lettersArray = [];

  for (var i = 0; i < letters.length; i++) {
    var letter = letters[i].toLowerCase();

    if (this.inArray(letter, lettersArray)) {
      result = false;
    } else {
      lettersArray.push(letter);
    }
  }

  return result;
};

module.exports = Isogram;
