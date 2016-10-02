var DnaTranscriber = function() {
  this.rna = {
    'C': 'G',
    'G': 'C',
    'A': 'U',
    'T': 'A'
  };
};

DnaTranscriber.prototype.toRna = function(dna) {
  var rna = '';

  for (var i = 0; i < dna.length; i++) {
    rna += this.rna[dna[i]];
  }

  return rna;
};

module.exports = DnaTranscriber;
