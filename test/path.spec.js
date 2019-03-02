import { convertRelativePathToAbsolut, filterMdFiles, joinPath} from '../src/controller/path.js';
import { walkInDirectorySync } from '../src/controller/readdirectory-sync.js';
import { readMdFiles } from '../src/controller/resolve-links.js';

describe('convertRelativePathToAbsolut', () => {
    it('deberia de retornar un string de la ruta absoluta', () => {
      expect(convertRelativePathToAbsolut('src')).toBe('C:\\Users\\CINTHYA\\Documents\\md-links\\LIM008-fe-md-links\\src');
  });
});

describe('filterMdFiles', () => {
  it('deberia filtrar y mostrar los archivos con extension md', () => {
     expect(filterMdFiles(['file.txt', 'file1.md'])).toEqual(['file1.md'])
  });
});

describe('joinPath', () => {
  it('deberia unir la ruta absoluta con el nombre archivo',() => {
    expect(joinPath('..\\..\\test\\testing\\file-1.txt')).toEqual('C:\\Users\\CINTHYA\\Documents\\md-links\\LIM008-fe-md-links\\test\\testing\\file-1.txt')
  });
});

const arrayOfLinks = [' [Leer un directorio](https://nodejs.org/api/fs.html#fs_fs_readdir_path_options_callback)',
' [Path](https://nodejs.org/api/path.html)',
' [Linea de comando CLI](https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e)'];

describe('readMdFiles', () => {
  it('deberia retornar un array con los links que se encuentren dentro del archivo a leer', () => {
    expect(readMdFiles(['C:\\Users\\CINTHYA\\Documents\\md-links\\LIM008-fe-md-links\\test\\testing\\archivo-1.md', 'C:\\Users\\CINTHYA\\Documents\\md-links\\LIM008-fe-md-links\\test\\testing\\file-1.txt'])).toEqual(arrayOfLinks)
  });
});

const retornando = [ 'C:\\Users\\CINTHYA\\Documents\\md-links\\LIM008-fe-md-links\\test\\path.spec.js',
'C:\\Users\\CINTHYA\\Documents\\md-links\\LIM008-fe-md-links\\test\\testing\\archivo-1.md',
'C:\\Users\\CINTHYA\\Documents\\md-links\\LIM008-fe-md-links\\test\\testing\\file-1.txt',
'C:\\Users\\CINTHYA\\Documents\\md-links\\LIM008-fe-md-links\\test\\testing\\folder-1\\file-2.md',
'C:\\Users\\CINTHYA\\Documents\\md-links\\LIM008-fe-md-links\\test\\testing\\folder-1\\file-3.md',
'C:\\Users\\CINTHYA\\Documents\\md-links\\LIM008-fe-md-links\\test\\testing\\folder-1\\folder-2\\foiles.md' ]
    
describe('walkInDirectorySync',() => {
  it('deberia retornar un array con todos los archivos del directorio',() => {
    expect(walkInDirectorySync('C:\\Users\\CINTHYA\\Documents\\md-links\\LIM008-fe-md-links\\test')).toEqual(retornando);
  });
});

