"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readMyFile = void 0;

const fs = require('fs');

const readMyFile = path => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, content) => {
      if (err) {
        return reject(err);
      }

      resolve(content);
    });
  });
}; // readMyFile('.\\test\\testing\\file1.txt')
// .then(content => console.log(content))
// .catch(err => (err))


exports.readMyFile = readMyFile;