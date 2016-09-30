var Hamming = function() {};

Hamming.prototype.compute = function(source, target) {
  var distance = 0;

  if (source.length !== target.length) {
    throw new Error('DNA strands must be of equal length.');
  }

  for (var i = 0; i < source.length; i++) {
    if (source[i] !== target[i]) {
      distance++;
    }
  }

  return distance;
};

module.exports = Hamming;
