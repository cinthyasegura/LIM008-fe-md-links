const fs = require('fs');
const path = require('path');  
import {filterMdFiles, joinPath} from '../controller/path.js';


export const readDirectory = path => {
  return new Promise((resolve, reject) => {
    fs.readdir(path, (err, files) => {
      if (err) {
        reject(err);
      }
      resolve(files);
    });
  });
};

let arrOfFiles = [];
export const walkInDirectory = (route) => {
  readDirectory(route)
    .then(content => {
      content.forEach(file => {
        const routeAbsFile = path.join(route, file);
        const stat = fs.statSync(routeAbsFile);
        if (stat.isDirectory()) {
          readDirectory(routeAbsFile)
            .then(resp => resp.forEach(doc => walkInDirectory(path.join(routeAbsFile, doc))))
            .catch(err => console.log(err));
        } else if (stat.isFile()) {
          arrOfFiles.push(routeAbsFile);
        } 
      });    
    }).catch(err => console.log(err));
  setTimeout(() => console.log(arrOfFiles), 2000);
  // return arrOfFiles;
};

// walkInDirectory('C:\\Users\\CINTHYA\\Documents\\md-links\\LIM008-fe-md-links\\test');

// readDirectory('./test/testing')
// // .then(file => console.log(file))     
// .then(file => {
//     const resultfilterMdFiles = filterMdFiles(file)
//     resultfilterMdFiles.forEach(element => {
//         console.log(joinPath(element))
//     });
// }).catch(err => console.log(err))

