'use strict';

const userAgentStrings = require('./uas.json');

module.exports = () => userAgentStrings[Math.floor(Math.random() * userAgentStrings.length)];
