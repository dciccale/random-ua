'use strict';

const assert = require('assert');
const userAgents = require('./uas.json');
const randomUas = require('.')();

assert.notEqual(userAgents.indexOf(randomUas), -1);

console.log('Passed ✔');
