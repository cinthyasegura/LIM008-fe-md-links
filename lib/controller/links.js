"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lookUpForLinks = void 0;

var _path = require("./path.js");

const fs = require('fs');

const path = require('path');

const lookUpForLinks = routes => {
  let linksOfFile = [];
  const filesArr = (0, _path.walkInDirectorySync)(routes);
  const mdFiles = (0, _path.filterMdFiles)(filesArr);
  mdFiles.forEach(paths => {
    const readMdFiles = fs.readFileSync(paths, 'utf-8');
    const regex = /(^|[^!])\[(.*)\]\((.*)\)/gm;
    let matchLinks = regex.exec(readMdFiles);

    while (matchLinks !== null) {
      linksOfFile.push({
        href: matchLinks[3],
        text: matchLinks[2].slice(0, 50),
        file: path.resolve(paths)
      });
      matchLinks = regex.exec(readMdFiles);
    } // console.log(`no se encontraron links en el archivo ${paths}`);

  });
  return linksOfFile;
};

exports.lookUpForLinks = lookUpForLinks;