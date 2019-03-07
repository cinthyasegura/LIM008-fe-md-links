"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateLink = exports.lookUpForLinks = void 0;

var _path = require("./path.js");

var _readdirectorySync = require("./readdirectory-sync.js");

const fs = require('fs');

const fetch = require('node-fetch');

const lookUpForLinks = routes => {
  let linksOfFile = [];
  const filesArr = (0, _readdirectorySync.walkInDirectorySync)(routes);
  const mdFiles = (0, _path.filterMdFiles)(filesArr);
  mdFiles.forEach(paths => {
    const readMdFiles = fs.readFileSync(paths, 'utf-8');
    const regex = /(^|[^!])\[(.*)\]\((.*)\)/gm;
    let matchLinks = regex.exec(readMdFiles);

    while (matchLinks !== null) {
      linksOfFile.push({
        href: matchLinks[3],
        text: matchLinks[2].slice(0, 50),
        file: paths
      });
      matchLinks = regex.exec(readMdFiles);
    } // console.log(`no se encontraron links en el archivo ${paths}`);

  });
  return linksOfFile;
}; // console.log(lookUpForLinks('C:\\Users\\CINTHYA\\Documents\\md-links\\LIM008-fe-md-links\\test\\testing'));
// --validate


exports.lookUpForLinks = lookUpForLinks;

const validateLink = route => {
  const linksObj = lookUpForLinks(route);
  const newArr = linksObj.map(links => new Promise((resolve, reject) => {
    const validatingUrl = fetch(links.href);
    validatingUrl.then(response => {
      if (response.status >= 200 && response.status < 400) {
        links.status = response.status;
        links.message = response.statusText;
        resolve(links);
      } else {
        links.status = response.status;
        links.message = 'Fail';
        resolve(links);
      }
    }).catch(err => {
      resolve(err);
    });
  }));
  return Promise.all(newArr);
}; // validateLink('C:\\Users\\CINTHYA\\Documents\\md-links\\LIM008-fe-md-links\\src\\async-try\\mdfolder')
//   .then(result => console.log(result))
//   .catch(err => err);


exports.validateLink = validateLink;