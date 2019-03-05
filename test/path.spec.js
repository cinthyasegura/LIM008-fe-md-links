import { convertRelativePathToAbsolut, filterMdFiles, joinPath} from '../src/controller/path.js';
import { walkInDirectorySync } from '../src/controller/readdirectory-sync.js';
import { lookUpForLinks, validateLink } from '../src/controller/resolve-links.js';

describe('convertRelativePathToAbsolut', () => {
  it('deberia de retornar un string de la ruta absoluta', () => {
    expect(convertRelativePathToAbsolut('src')).toBe('C:\\Users\\CINTHYA\\Documents\\md-links\\LIM008-fe-md-links\\src');
  });
});

describe('filterMdFiles', () => {
  it('deberia filtrar y mostrar los archivos con extension md', () => {
    expect(filterMdFiles(['file.txt', 'file1.md'])).toEqual(['file1.md']);
  });
});

describe('joinPath', () => {
  it('deberia unir la ruta absoluta con el nombre archivo', () => {
    expect(joinPath('..\\..\\test\\testing\\file-1.txt')).toEqual('C:\\Users\\CINTHYA\\Documents\\md-links\\LIM008-fe-md-links\\test\\testing\\file-1.txt');
  });
});

const arrayOfLinks = [ { href: 'https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e', text: 'Node.js', file:
'C:\\Users\\CINTHYA\\Documents\\md-links\\LIM008-fe-md-links\\test\\testing\\folder-1\\file-2.md',
}];

describe('lookUpForLinks', () => {
  it('deberia retornar un array de objetos con las propiedades href, text, y file', () => {
    expect(lookUpForLinks('C:\\Users\\CINTHYA\\Documents\\md-links\\LIM008-fe-md-links\\test\\testing\\folder-1')).toEqual(arrayOfLinks);
  });
});

const retornando = [ 'C:\\Users\\CINTHYA\\Documents\\md-links\\LIM008-fe-md-links\\test\\path.spec.js',
  'C:\\Users\\CINTHYA\\Documents\\md-links\\LIM008-fe-md-links\\test\\testing\\archivo-1.md',
  'C:\\Users\\CINTHYA\\Documents\\md-links\\LIM008-fe-md-links\\test\\testing\\file-1.txt',
  'C:\\Users\\CINTHYA\\Documents\\md-links\\LIM008-fe-md-links\\test\\testing\\folder-1\\file-2.md',
  'C:\\Users\\CINTHYA\\Documents\\md-links\\LIM008-fe-md-links\\test\\testing\\folder-1\\file-3.md',
];
    
describe('walkInDirectorySync', () => {
  it('deberia retornar un array con todos los archivos del directorio', () => {
    expect(walkInDirectorySync('C:\\Users\\CINTHYA\\Documents\\md-links\\LIM008-fe-md-links\\test')).toEqual(retornando);
  });
});

const resultValidateLink = [ { href: 'https://nodejs.org/api/fs.html#fs_fs_readdir_path_options_callback',
  text: 'Leer un directorio',
  file: 'C:\\Users\\CINTHYA\\Documents\\md-links\\LIM008-fe-md-links\\src\\async-try\\mdfolder\\mdtext.md',
  status: 200,
  message: 'OK' },
{ href: 'https://nodejs.org/api/path.html',
  text: 'Path',
  file: 'C:\\Users\\CINTHYA\\Documents\\md-links\\LIM008-fe-md-links\\src\\async-try\\mdfolder\\mdtext.md',
  status: 200,
  message: 'OK' },
{ href: 'https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e',
  text: 'Linea de comando CLI',
  file:
  'C:\\Users\\CINTHYA\\Documents\\md-links\\LIM008-fe-md-links\\src\\async-try\\mdfolder\\mdtext.md',
  status: 200,
  message: 'OK' },
{ href: 'https://github.com/octokit/rest.js/issu',
  text: 'Hola',
  file: 'C:\\Users\\CINTHYA\\Documents\\md-links\\LIM008-fe-md-links\\src\\async-try\\mdfolder\\mdtext.md',
  status: 404,
  message: 'Fail' } ];

describe('validateLink', () => {
  it('deberia retornar una promesa que al resolverse muestre un objeto con el status y message', (done) => {
    validateLink('C:\\Users\\CINTHYA\\Documents\\md-links\\LIM008-fe-md-links\\src\\async-try\\mdfolder').then(() => {
      expect(validateLink).toEqual(resultValidateLink);
      done();
    }).catch(err => done());
  });
});

