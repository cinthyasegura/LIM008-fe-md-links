"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateLink = void 0;

var _links = require("./links.js");

const fetch = require('node-fetch');

// --validate FIX ecibe solo directorio
const validateLink = route => {
  const linksObj = (0, _links.lookUpForLinks)(route);
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
      links.status = 'No contiene una URL válida';
      links.message = 'Fail', resolve(links);
    });
  }));
  return Promise.all(newArr);
}; // validateLink('C:\\Users\\CINTHYA\\Documents\\md-links\\LIM008-fe-md-links\\test\\testing\\folder-2\\file-4.md')
// .then(resp => console.log(resp))


exports.validateLink = validateLink;