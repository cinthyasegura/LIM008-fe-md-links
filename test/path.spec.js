import { walkInDirectorySync, filterMdFiles } from '../src/controller/path.js';

describe('filterMdFiles', () => {
  it('deberia filtrar y mostrar los archivos con extension md', () => {
    expect(filterMdFiles(['file.txt', 'file1.md'])).toEqual(['file1.md']);
  });
});

const result = [ 
  `${process.cwd()}\\test\\links.spec.js`,
  `${process.cwd()}\\test\\path.spec.js`,
  `${process.cwd()}\\test\\testing\\archivo-1.md`,
  `${process.cwd()}\\test\\testing\\file-1.txt`,
  `${process.cwd()}\\test\\testing\\folder-1\\file-2.md`,
  `${process.cwd()}\\test\\testing\\folder-1\\file-3.md`,
  `${process.cwd()}\\test\\testing\\folder-2\\file-4.md`,
  `${process.cwd()}\\test\\testing\\folder-3\\mdtext.md`
];
    
describe('walkInDirectorySync', () => {
  it('deberia retornar un array con todos los archivos del directorio', () => {
    expect(walkInDirectorySync(`${process.cwd()}\\test`)).toEqual(result);
  });
});
