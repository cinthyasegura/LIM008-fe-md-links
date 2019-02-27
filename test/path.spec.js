// import  {validatePath,convertRelativePathToAbsolut, filterMdArchives} from '../src/controller/path.js'; 
import {readMyFile} from '../src/controller/readFile.js';

// falta testear la funcion en caso de error 
 describe('readMyFile', () => {
    it('debería retornar el contenido del archivo que se le pasa como argumento', (done) => {
      readMyFile('test\\testing\\file1.txt').then(() => {
        expect(readMyFile).toEqual('HOLAA')
        done();
      }).catch(err => done())  
   })
   it('debería retornar error al no encontrar un archivo con esa ruta', (done) => {
    readMyFile('\\testing\\file.txt').then(() => done()).catch((error) => {
      expect(error.code).toEqual('ENOENT')})
      done();

    })
  });  

// describe('convertRelativePathToAbsolut', () => {
//     it('deberia ser una funcion', () => {
//       expect(typeof convertRelativePathToAbsolut).toBe('function');
//     })
//     it ('deberia de retornar un string de la ruta absoluta', () => {
//         expect(convertRelativePathToAbsolut('./Documents/folder')).toBe('C:\Documents\folder');
//   });
// });

// describe('filterMdArchives', () => {
//   it('deberia de retornar un array con todos los archivos md que encuentre', () => {
//     expect(filterMdArchives(['array con todos los archivos'])).toBe([archivos.md])
//   })
// })