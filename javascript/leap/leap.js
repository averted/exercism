var Year = function(year) {
  this.year = year;
};

Year.prototype.isDivisibleBy = function(value) {
  return this.year % value === 0 ? true : false;
};

Year.prototype.isLeap = function() {
  var leap = false;

  if (this.isDivisibleBy(4)) {
    leap = true;

    if (this.isDivisibleBy(100)) {
      leap = false;

      if (this.isDivisibleBy(400)) {
        leap = true;
      }
    }
  }

  return leap;
};

module.exports = Year;
