#!/usr/bin/env node
import { validateAndStats } from './index.js';

// const [, , ...args] = process.argv;

const args = process.argv.slice(2);

console.log(`Hello world ${args}`);
console.log(args);

let options = {
  validate: false,
  stats: false
};
const route = process.argv[0];
console.log(route)

