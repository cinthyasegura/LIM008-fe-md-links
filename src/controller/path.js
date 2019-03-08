const path = require('path');
const fs = require('fs');

export const walkInDirectorySync = route => {
  let arrOfFiles = [];
  const contentArr = fs.readdirSync(route);
  contentArr.forEach(files => {
    const routeAbsFile = path.join(route, files);
    const stat = fs.statSync(routeAbsFile);
    if (stat.isDirectory()) {
      arrOfFiles = arrOfFiles.concat(walkInDirectorySync((routeAbsFile)));
    } else {
      arrOfFiles.push(routeAbsFile);
    }
  });
  return arrOfFiles;
};


export const filterMdFiles = contentArr => {
  return contentArr.filter(file => path.extname(file) === '.md');
};

