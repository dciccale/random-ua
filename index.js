'use strict';

const userAgents = require('./uas.json');

module.exports = function getUserAgent() {
  return userAgents[Math.round(Math.random() * userAgents.length)];
};
