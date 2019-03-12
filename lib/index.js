"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mdLinks = void 0;

var _validate = require("./controller/validate.js");

var _links = require("./controller/links.js");

var _cluster = require("cluster");

// export const validateAndStats = (route, options) => {
//   if (options.stats && !options.validate) {
//     return Promise.all([
//       totalLinksStats(route),
//       uniqueLinksStats(route)
//     ]);
//   } else if (options.stats && options.validate) {
//     return Promise.all([
//       totalLinksStats(route),
//       uniqueLinksStats(route),
//       brokenLinksStats(route)
//     ]);
//   } else if (options.validate && !options.stats) {
//     return validateLink(route).then(resp => resp).catch(err => console.log(err));
//   } else {
//     return validateLink(route).then(resp => resp).catch(err => console.log(err));
//   }
// };
const mdLinks = (route, options) => {
  if (options.validate) {
    return (0, _validate.validateLink)(route).then(resp => resp).catch(err => err);
  } else if (!options.validate) {
    return new Promise(resolve => resolve((0, _links.lookUpForLinks)(route)));
  }
};

exports.mdLinks = mdLinks;