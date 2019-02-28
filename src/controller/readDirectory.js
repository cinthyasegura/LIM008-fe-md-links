const fs = require('fs');
const path = require('path');  
import {filterMdFiles, joinPath} from './path.js';


export const readDirectory = path => {
    return new Promise((resolve, reject) => {
        fs.readdir(path, (err, files) => {
            if(err) {
              reject(err);
            }
            resolve(files);
        });
    });
};

export const walkInDirectory = () => {

};
// readDirectory('./test/testing')
// // .then(file => console.log(file))
// .then(file => {
//     const resultfilterMdFiles = filterMdFiles(file)
//     resultfilterMdFiles.forEach(element => {
//         console.log(joinPath(element))
//     });
// }).catch(err => console.log(err))

