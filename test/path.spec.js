import  {validatePath,convertRelativePathToAbsolut} from '../src/controller/path.js'; 

describe('validatePath', () => {
    it('deberia ser una funcion', () => {
      expect(typeof validatePath).toBe('function');
    })
    it ('deberia de retornar un valor booleano', () => {
        expect(validatePath('C:\Documents\folder')).toEqual(true);
  });
});
   

describe('convertRelativePathToAbsolut', () => {
    it('deberia ser una funcion', () => {
      expect(typeof convertRelativePathToAbsolut).toBe('function');
    })
    it ('deberia de retornar un string de la ruta absoluta', () => {
        expect(convertRelativePathToAbsolut('./Documents/folder')).toBe('C:\Documents\folder');
  });
});