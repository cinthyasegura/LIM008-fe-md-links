import { walkInDirectorySync, filterMdFiles } from '../src/controller/path.js';
const path = require('path');

describe('filterMdFiles', () => {
  it('deberia filtrar y mostrar los archivos con extension md', () => {
    expect(filterMdFiles(['file.txt', 'file1.md'])).toEqual(['file1.md']);
  });
});

const result = [ 
  path.join(`${process.cwd()}`, '\\test\\links.spec.js'),
  path.join(`${process.cwd()}`, '\\test\\path.spec.js'),
  path.join(`${process.cwd()}`, '\\test\\testing\\archivo-1.md'),
  path.join(`${process.cwd()}`, '\\test\\testing\\file-1.txt'),
  path.join(`${process.cwd()}`, '\\test\\testing\\folder-1\\file-2.md'),
  path.join(`${process.cwd()}`, '\\test\\testing\\folder-1\\file-3.md'),
  path.join(`${process.cwd()}`, '\\test\\testing\\folder-2\\file-4.md'),
  path.join(`${process.cwd()}`, '\\test\\testing\\folder-3\\mdtext.md')
];
    
describe('walkInDirectorySync', () => {
  it('deberia retornar un array con todos los archivos del directorio', () => {
    expect(walkInDirectorySync(path.join(`${process.cwd()}`, '\\test'))).toEqual(result);
  });
});
