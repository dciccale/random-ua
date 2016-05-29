'use strict';

const userAgents = require('./uas.json');

module.exports = function getUserAgent() {
  return userAgents[Math.floor(Math.random() * userAgents.length)];
};
