'use strict';

var randomBool = require('random-bool');

module.exports = function () {
  return randomBool() ? 'am' : 'pm';
};
