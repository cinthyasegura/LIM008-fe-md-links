#!/usr/bin/env node

const [, , ...args] = process.argv;

console.log(`Hello world ${args}`);
console.log(args[0]);