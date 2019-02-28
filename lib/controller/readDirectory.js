"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readDirectory = void 0;

var _path = require("./path.js");

const fs = require('fs');

const path = require('path');

const readDirectory = path => {
  return new Promise((resolve, reject) => {
    fs.readdir(path, (err, files) => {
      if (err) {
        reject(err);
      }

      resolve(files);
    });
  });
}; // readDirectory('./test/testing')
// // .then(file => console.log(file))
// .then(file => {
//     const resultfilterMdFiles = filterMdFiles(file)
//     resultfilterMdFiles.forEach(element => {
//         console.log(joinPath(element))
//     });
// }).catch(err => console.log(err))


exports.readDirectory = readDirectory;