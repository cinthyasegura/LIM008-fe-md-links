const path = require('path');
// export const walkDirectory = () => {
// /** 
// * @param {path} aplicar recursividad
// * @returns {array con los archivos}
// */
// };


export const convertRelativePathToAbsolut = relativePath => 
    path.resolve(relativePath)

export const filterMdFiles = contentArr => {
    return contentArr.filter(file => path.extname(file) === '.md')
};


export const joinPath = file => 
    path.join(__dirname, file)

// export const searchLinks = Absolutpath => {
//     return [{
//         path: path.resolve(relativePath),
//         href: 'href',
//         text: text.slice(0, 50)
//     }];
// };

