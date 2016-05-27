'use strict';

const assert = require('assert');
const userAgents = require('./uas.json');
const randomUserAgent = require('./index')();

assert.notEqual(userAgents.indexOf(randomUserAgent), -1);

console.log('Passed ✔');
