"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filterMdFiles = void 0;

const path = require('path');

const filterMdFiles = contentArr => {
  return contentArr.filter(file => path.extname(file) === '.md');
};

exports.filterMdFiles = filterMdFiles;