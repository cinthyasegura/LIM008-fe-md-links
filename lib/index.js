"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateAndStats = void 0;

var _stats = require("./controller/stats.js");

var _validate = require("./controller/validate.js");

const validateAndStats = (route, options) => {
  if (options.stats && !options.validate) {
    return Promise.all([(0, _stats.totalLinksStats)(route), (0, _stats.uniqueLinksStats)(route)]).then(resp => resp.forEach(values => console.log(values))).catch(err => err);
  } else if (options.stats && options.validate) {
    return Promise.all([(0, _stats.totalLinksStats)(route), (0, _stats.uniqueLinksStats)(route), (0, _stats.brokenLinksStats)(route)]).then(resp => resp.forEach(values => console.log(values)));
  } else if (options.validate && !options.stats) {
    return (0, _validate.validateLink)(route).then(resp => {
      resp.forEach(values => console.log(` Path: ${values.file}\n Link: ${values.href}\n Status: ${values.status}\n StatusText: ${values.message}\n Text: ${values.text}\n`));
    }).catch(err => err);
  } else {
    return (0, _validate.validateLink)(route).then(resp => {
      resp.forEach(values => console.log(` Path: ${values.file}\n Link: ${values.href}\n Text: ${values.text}\n`));
    }).catch(err => err);
  }
};

exports.validateAndStats = validateAndStats;