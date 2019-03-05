const fs = require('fs');
const fetch = require('node-fetch');
import { filterMdFiles } from './path.js';
import { walkInDirectorySync } from './readdirectory-sync.js';

export const lookUpForLinks = (routes) => {
  let linksOfFile = [];
  const filesArr = walkInDirectorySync(routes);
  const mdFiles = filterMdFiles(filesArr);
  mdFiles.forEach(paths => {
    const readMdFiles = fs.readFileSync(paths, 'utf-8');
    // const match = regex.exec(readMdFiles);
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

export const validateLink = route => {
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
};
// validateLink('C:\\Users\\CINTHYA\\Documents\\md-links\\LIM008-fe-md-links\\src\\async-try\\mdfolder')
//   .then(result => result)
//   .catch(err => err);