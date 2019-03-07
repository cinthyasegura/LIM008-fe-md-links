"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.brokenLinksStats = exports.uniqueLinksStats = exports.totalLinksStats = void 0;

var _resolveLinks = require("./resolve-links.js");

// --stats
// export const linkStats = (route, callback) => {
//   const linkStatus = validateLink(route);
//   return linkStatus.then(response => {
//     const totalLinks = response.length;
//     const uniqueLinks = response.filter((links, index, arr) => arr.indexOf(links) === index).length;
//     callback(totalLinks, uniqueLinks);
//   }).catch(err => (err));
// };
// export const consoleando = (totalValue, uniqueValue) => {
//   const totalLinksValue = `total: ${totalValue}`;
//   const uniqueLinksValue = `unique: ${uniqueValue}`;
//   return (totalLinksValue, uniqueLinksValue);
// };
// console.log(
//   linkStats('C:\\Users\\CINTHYA\\Documents\\md-links\\LIM008-fe-md-links\\src\\async-try\\mdfolder', consoleando)
// )
// export const calculateBrokenLinks = (route, callback) => {
//   const linksArr = validateLink(route);
//   return linksArr.then(resp => {
//     const brokenLinks = resp.filter(statusText => statusText.message === 'Fail').length;
//     callback(brokenLinks);
//   }).catch(err => err);
// };
// calculateBrokenLinks('C:\\Users\\CINTHYA\\Documents\\md-links\\LIM008-fe-md-links\\src\\async-try\\mdfolder', (broken) => {
//   console.log(`broken: ${broken}`)
// })
const doStats = (resolver, route) => new Promise((resolve, reject) => {
  const linkStatus = (0, _resolveLinks.validateLink)(route);
  linkStatus.then(response => {
    const result = resolver(response);
    resolve(result);
  }).catch(err => reject(err));
}); // --stats


const totalLinksStats = route => {
  const resolver = response => response.length;

  return doStats(resolver, route);
};

exports.totalLinksStats = totalLinksStats;
totalLinksStats('C:\\Users\\CINTHYA\\Documents\\md-links\\LIM008-fe-md-links\\src\\async-try\\mdfolder').then(resp => console.log(`Total: ${resp}`)).catch(err => console.log(err));

const uniqueLinksStats = route => {
  const resolver = response => response.filter((links, index, arr) => arr.indexOf(links) === index).length;

  return doStats(resolver, route);
};

exports.uniqueLinksStats = uniqueLinksStats;
uniqueLinksStats('C:\\Users\\CINTHYA\\Documents\\md-links\\LIM008-fe-md-links\\src\\async-try\\mdfolder').then(resp => console.log(`Unique: ${resp}`)).catch(err => console.log(err));

const brokenLinksStats = route => {
  const resolver = response => response.filter(statusText => statusText.message === 'Fail').length;

  return doStats(resolver, route);
};

exports.brokenLinksStats = brokenLinksStats;
brokenLinksStats('C:\\Users\\CINTHYA\\Documents\\md-links\\LIM008-fe-md-links\\src\\async-try\\mdfolder').then(resp => console.log(`Broken: ${resp}`)).catch(err => console.log(err));