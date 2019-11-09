var Pangram = function(sentence) {
  this.letters = sentence.toLowerCase().split('');
  this.alphabet = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
    'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
    's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
  ]
};

Pangram.prototype.removeFromArray = function(item, array) {
  var index = array.indexOf(item);

  if (index > -1) {
    array.splice(index, 1);
  }
}

Pangram.prototype.isPangram = function() {
  for (var i = 0; i < this.letters.length; i++) {
    var letter = this.letters[i];
    this.removeFromArray(letter, this.alphabet);
  }

  return !this.alphabet.length;
};

module.exports = Pangram;
