var Bob = function() {
  return {
    sanitize: function() {
      return this.input
        .replace(/[áàâä]/g, 'a')
        .replace(/[úùûü]/g, 'u')
        .replace(/[^a-zA-Z]/g, '');
    },

    isShout: function() {
      var sanitized = this.sanitize();

      return sanitized && sanitized === sanitized.toUpperCase();
    },

    isQuestion: function(input) {
      return this.input[this.input.length - 1] === '?';
    },

    isEmpty: function() {
      return !this.input.trim();
    },

    hey: function(input) {
      var response = 'Whatever.';

      this.input = input;

      if (this.isShout()) {
        response = 'Whoa, chill out!';
      } else if (this.isQuestion()) {
        response = 'Sure.';
      } else if (this.isEmpty()) {
        response = 'Fine. Be that way!';
      }

      return response;
    }
  };
};


module.exports = Bob;
