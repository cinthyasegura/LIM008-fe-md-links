"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateAndStats = void 0;

var _stats = require("./stats.js");

var _resolveLinks = require("./resolve-links.js");

let options = {
  validate: true,
  stats: false
};

const validateAndStats = (route, options) => {
  let promises = null;

  if (options.stats && options.validate === false) {
    promises = Promise.all([(0, _stats.totalLinksStats)(route), (0, _stats.uniqueLinksStats)(route)]).then(resp => resp.forEach(values => console.log(values))).catch(err => err);
  } else if (options.stats && options.validate) {
    promises = Promise.all([(0, _stats.totalLinksStats)(route), (0, _stats.uniqueLinksStats)(route), (0, _stats.brokenLinksStats)(route)]).then(resp => resp.forEach(values => console.log(values)));
  } else if (options.validate && options.stats === false) {
    const resultValidateLink = (0, _resolveLinks.validateLink)(route);
    resultValidateLink.then(resp => {
      resp.forEach(values => console.log(values.file, values.href, values.status, values.message, values.text));
    }).catch(err => err);
  }

  return promises;
}; // validateAndStats('C:\\Users\\CINTHYA\\Documents\\md-links\\LIM008-fe-md-links\\test\\testing\\folder-1', options);


exports.validateAndStats = validateAndStats;