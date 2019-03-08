#!/usr/bin/env node
"use strict";

var _index = require("./index.js");

// const [, , ...args] = process.argv;
const args = process.argv.slice(2);
console.log(`Hello world ${args}`);
console.log(args);
let options = {
  validate: false,
  stats: false
};