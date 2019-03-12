"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mdLinks = void 0;

var _validate = require("./controller/validate.js");

var _links = require("./controller/links.js");

const mdLinks = (route, options = {}) => {
  if (options.validate) {
    return (0, _validate.validateLink)(route).then(resp => resp).catch(err => err);
  } else if (options.validate === false) {
    return new Promise(resolve => resolve((0, _links.lookUpForLinks)(route)));
  } else {
    return new Promise(resolve => resolve((0, _links.lookUpForLinks)(route)));
  }
};

exports.mdLinks = mdLinks;
mdLinks('test\\testing\\folder-2').then(resp => console.log(resp));