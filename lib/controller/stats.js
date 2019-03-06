"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.linkStats = void 0;

var _resolveLinks = require("./resolve-links.js");

const linkStats = (route, callback) => {
  const linkStatus = (0, _resolveLinks.validateLink)(route);
  linkStatus.then(response => {
    const filterf = response.filter(e => e.message === 'OK');
    callback(filterf.length);
  }).catch(err => callback(err));
};

exports.linkStats = linkStats;

const consoleando = total => console.log(total);

linkStats('C:\\Users\\CINTHYA\\Documents\\md-links\\LIM008-fe-md-links\\src\\async-try\\mdfolder', consoleando);