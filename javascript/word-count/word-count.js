var Words = function() {
  return {
    count: function(phrase) {
      var result = {}
        , words = phrase.split(/\n|\t| /);

      for (var i = 0; i < words.length; i++) {
        var word = words[i].toLowerCase();

        if (word && word.length) {
          if (result.hasOwnProperty(word)) {
            result[word] += 1;
          } else {
            result[word] = 1;
          }
        }
      }

      return result;
    }
  };
};


module.exports = Words;
