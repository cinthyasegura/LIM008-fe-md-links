const fs = require('fs')
 
export const readMyFile = (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf-8', (err, content) => {
            if(err) {
              return reject(err)
            }
            resolve(content)
        })
    })
};
// readMyFile('.\\test\\testing\\file1.txt')
// .then(content => console.log(content))
// .catch(err => (err))

