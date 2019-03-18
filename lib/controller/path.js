"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filterMdFiles = exports.walkInDirectorySync = void 0;

const path = require('path');

const fs = require('fs');

const walkInDirectorySync = route => {
  let arrOfFiles = [];

  if (fs.statSync(route).isFile()) {
    arrOfFiles.push(route);
  } else {
    const contentArr = fs.readdirSync(route);
    contentArr.forEach(files => {
      const routeAbsFile = path.join(route, files);
      arrOfFiles = [...arrOfFiles, ...walkInDirectorySync(routeAbsFile)];
    });
  }

  ;
  return arrOfFiles;
};

exports.walkInDirectorySync = walkInDirectorySync;

const filterMdFiles = contentArr => {
  return contentArr.filter(file => path.extname(file).toLowerCase() === '.md');
};

exports.filterMdFiles = filterMdFiles;