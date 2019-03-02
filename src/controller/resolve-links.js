const fs = require('fs');
import { filterMdFiles } from './path.js';

export const readMdFiles = filesArr => {
    let linksOfFile = [];
    const mdFiles = filterMdFiles(filesArr);
    mdFiles.forEach(paths => {
        console.log(paths)
        const readFiles = fs.readFileSync(paths, 'utf-8'); 
        const regex = /(^|[^!])\[(.*)\]\((.*)\)/gm;
        linksOfFile = linksOfFile.concat(readFiles.match(regex)); 
        // console.log(linksOfFile)   
    });
    return linksOfFile;
};
console.log(readMdFiles(['C:\\Users\\CINTHYA\\Documents\\md-links\\LIM008-fe-md-links\\test\\testing\\archivo-1.md', 'C:\\Users\\CINTHYA\\Documents\\md-links\\LIM008-fe-md-links\\test\\testing\\folder-1\\file-2.md'])
)

// export const getLinksInfo = linksArr => {
//     linksArr.forEach(links => {
//         const linksInfo = {
//             text:,
//             url:,
//             path: 
//         };
//     });
// };