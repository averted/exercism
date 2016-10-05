var Gigasecond = function(date) {
  this.d = date

  this.seconds = {
    giga:   1000000000,
    year:   60 * 60 * 24 * 365,
    month:  60 * 60 * 24 * 31.25,
    day:    60 * 60 * 24,
    hour:   60 * 60,
    minute: 60,
    second: 1,
  }

  this.leftover = {
    giga:   this.seconds.giga,
    year:   null,
    month:  null,
    day:    null,
    hour:   null,
    minute: null,
    second: null,
  }

  this.parse('year');
  this.parse('month');
  this.parse('day');
  this.parse('hour');
  this.parse('minute');
  this.parse('second');
};

Gigasecond.prototype.parse = function(type) {
  var leftover = 'giga';

  switch (type) {
    case 'month':
      leftover = 'year';
      break;

    case 'day':
      leftover = 'month';
      break;

    case 'hour':
      leftover = 'day';
      break;

    case 'minute':
      leftover = 'hour';
      break;

    case 'second':
      return this[type] = this.leftover.minute;
  }

  this[type] = Math.floor(this.leftover[leftover] / this.seconds[type]);
  this.leftover[type] = ((this.leftover[leftover] / this.seconds[type]) - this[type]) * this.seconds[type];
};

Gigasecond.prototype.date = function() {
  var seconds = 0
    , minutes = 0
    , hours = 0
    , days = 0
    , months = 0
    , years = 0

  seconds = this.second + this.d.getUTCSeconds()

  if (seconds > 60) {
    seconds -= 60
    minutes++
  }

  minutes += this.minute + this.d.getUTCMinutes()

  if (minutes >= 60) {
    minutes -= 60
    hours++
  }

  hours += this.hour + this.d.getUTCHours()

  if (hours > 24) {
    hours -= 24
    days++
  }

  days += this.day + this.d.getUTCDate()

  if (days > 30) {
    days -= 30
    months++
  }

  months += this.month + this.d.getUTCMonth()

  if (months > 12) {
    months -= 12
    years++
  }

  years += this.year + this.d.getUTCFullYear()

  return new Date(Date.UTC(years, months, days, hours, minutes, Math.round(seconds)))
};

module.exports = Gigasecond;
