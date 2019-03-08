"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.brokenLinksStats = exports.uniqueLinksStats = exports.totalLinksStats = void 0;

var _resolveLinks = require("./resolve-links.js");

const doStats = (resolver, route) => new Promise((resolve, reject) => {
  const linkStatus = (0, _resolveLinks.validateLink)(route);
  linkStatus.then(response => {
    const result = resolver(response);
    resolve(result);
  }).catch(err => reject(err));
});

const totalLinksStats = route => {
  const resolver = response => `Total: ${response.length}`;

  return doStats(resolver, route);
}; // totalLinksStats('C:\\Users\\CINTHYA\\Documents\\md-links\\LIM008-fe-md-links\\src\\async-try\\mdfolder')
//   .then((resp) => console.log(resp))
//   .catch(err => console.log(err));


exports.totalLinksStats = totalLinksStats;

const uniqueLinksStats = route => {
  const resolver = response => `Unique: ${response.filter((links, index, arr) => arr.indexOf(links) === index).length}`;

  return doStats(resolver, route);
}; // uniqueLinksStats('C:\\Users\\CINTHYA\\Documents\\md-links\\LIM008-fe-md-links\\src\\async-try\\mdfolder')
//   .then((resp) => console.log(resp))
//   .catch(err => console.log(err));


exports.uniqueLinksStats = uniqueLinksStats;

const brokenLinksStats = route => {
  const resolver = response => `Broken: ${response.filter(statusText => statusText.message === 'Fail').length}`;

  return doStats(resolver, route);
}; // brokenLinksStats('C:\\Users\\CINTHYA\\Documents\\md-links\\LIM008-fe-md-links\\src\\async-try\\mdfolder')
//   .then((resp) => console.log(resp))
//   .catch(err => console.log(err));


exports.brokenLinksStats = brokenLinksStats;