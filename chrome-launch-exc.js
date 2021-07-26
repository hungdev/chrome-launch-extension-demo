#!/usr/bin/env node

const path = require('path');
const chromeLaunch = require('./chrome-launch');

const url = 'https://google.com';
const extensionPath = path.resolve(__dirname, 'extension');

const args = [`--load-extension=${extensionPath}`];

chromeLaunch(url, { args });