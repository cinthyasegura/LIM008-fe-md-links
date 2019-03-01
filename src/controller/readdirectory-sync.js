const fs = require('fs');
const path = require('path');
import { filterMdFiles } from './path.js'

export const walkInDirectorySync = route => {
    let arrOfFiles = [];
    const contentArr = fs.readdirSync(route);
    contentArr.forEach(files => {
       const routeAbsFile = path.join(route, files)
       const  stat = fs.statSync(routeAbsFile);
        if (stat.isDirectory()) {
            arrOfFiles = arrOfFiles.concat(walkInDirectorySync((routeAbsFile)))
        } else {
            arrOfFiles.push(routeAbsFile)
        }
       
     });
     return filterMdFiles(arrOfFiles);
};

walkInDirectorySync('C:\\Users\\CINTHYA\\Documents\\md-links\\LIM008-fe-md-links\\test');