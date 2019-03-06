"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.joinPath = exports.filterMdFiles = exports.convertRelativePathToAbsolut = void 0;

const path = require('path');

const convertRelativePathToAbsolut = relativePath => path.resolve(relativePath);

exports.convertRelativePathToAbsolut = convertRelativePathToAbsolut;

const filterMdFiles = contentArr => {
  return contentArr.filter(file => path.extname(file) === '.md');
};

exports.filterMdFiles = filterMdFiles;

const joinPath = file => path.join(__dirname, file); // export const searchLinks = Absolutpath => {
//     return [{
//         path: path.resolve(relativePath),
//         href: 'href',
//         text: text.slice(0, 50)
//     }];
// };


exports.joinPath = joinPath;