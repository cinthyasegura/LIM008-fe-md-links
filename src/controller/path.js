
const path = require('path');
const fs = require('fs');

export const walkInDirectorySync = route => {
  let arrOfFiles = [];
  if (fs.statSync(route).isFile()) {
    arrOfFiles.push(route);
  } else {
    const contentArr = fs.readdirSync(route);
    contentArr.forEach(files => {
      const routeAbsFile = path.join(route, files);
      arrOfFiles = arrOfFiles.concat(walkInDirectorySync((routeAbsFile)));
    }); 
  };
  return arrOfFiles;
};
// console.log(walkInDirectorySync('C:\\Users\\CINTHYA\\Documents\\md-links\\LIM008-fe-md-links\\test\\testing'));

export const filterMdFiles = contentArr => {
  return contentArr.filter(file => path.extname(file) === '.md');
};

