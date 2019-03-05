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
    const readMdFiles = fs.readFileSync(paths, 'utf-8'); // const match = regex.exec(readMdFiles);

    const matchLinks = readMdFiles.match(/(^|[^!])\[(.*)\]\((.*)\)/gm);

    if (matchLinks !== null) {
      matchLinks.forEach(links => {
        const bracket = links.indexOf(']');
        return linksOfFile.push({
          href: links.slice(bracket + 2, links.length - 1),
          text: links.slice(2, bracket),
          file: paths
        });
      });
    } else {
      console.log(`no se encontraron links en el archivo ${paths}`);
    }
  });
  return linksOfFile;
};

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
      reject(err);
    });
  }));
  return Promise.all(newArr);
}; // validateLink('C:\\Users\\CINTHYA\\Documents\\md-links\\LIM008-fe-md-links\\src\\async-try\\mdfolder')
//   .then(result => result)
//   .catch(err => err);


exports.validateLink = validateLink;