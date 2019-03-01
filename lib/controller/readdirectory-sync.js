"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.walkInDirectorySync = void 0;

var _path = require("./path.js");

const fs = require('fs');

const path = require('path');

const walkInDirectorySync = route => {
  let arrOfFiles = [];
  const contentArr = fs.readdirSync(route);
  contentArr.forEach(files => {
    const routeAbsFile = path.join(route, files);
    const stat = fs.statSync(routeAbsFile);

    if (stat.isDirectory()) {
      arrOfFiles = arrOfFiles.concat(walkInDirectorySync(routeAbsFile));
    } else {
      arrOfFiles.push(routeAbsFile);
    }
  });
  return (0, _path.filterMdFiles)(arrOfFiles);
};

exports.walkInDirectorySync = walkInDirectorySync;
console.log(walkInDirectorySync('C:\\Users\\CINTHYA\\Documents\\md-links\\LIM008-fe-md-links\\test'));