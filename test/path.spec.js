// import  {validatePath,convertRelativePathToAbsolut, filterMdArchives} from '../src/controller/path.js'; 
import {readMyFile} from '../src/controller/readFile.js';
import { readDirectory } from '../src/controller/readDirectory.js';
import { convertRelativePathToAbsolut, filterMdFiles, joinPath} from '../src/controller/path.js';


 describe('readMyFile', () => {
    it('debería retornar el contenido del archivo que se le pasa como argumento', (done) => {
      readMyFile('test\\testing\\file-1.txt').then(() => {
        expect(readMyFile).toEqual('HOLAA')
        done();
      }).catch(err => done())  
   });
   it('debería retornar error al no encontrar un archivo con esa ruta', (done) => {
    readMyFile('\\testing\\file.txt').then(() => done()).catch((error) => {
      expect(error.code).toEqual('ENOENT')})
      done();
    });
  });  

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

describe('readDirectory', () => {
  it('deberia mostrar el contenido que se encuentra dentro del directorio', (done) => {
    readDirectory('test\\testing\\folder-1')
    .then((files) => {
      expect(files.length).toBe(3)
      done();
    }).catch(error => {
      console.log(error)
      done();
    });  
  });
  it('deberia retornar error: enoent que no se encuentra la carpeta', (done) => {
    readDirectory('test\\testing\\folder')
    .then((files) => {
      expect(files.length).toBe(3)
      done();
    }).catch(error => {
      console.log(error)
      done();
    });  
  });

});