import { lookUpForLinks } from '../src/controller/links.js';
import { validateLink } from '../src/controller/validate.js';
import { totalLinksStats, uniqueLinksStats, brokenLinksStats } from '../src/controller/stats.js'; 

const arrayOfLinks = [{ 
  href: 'https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e', 
  text: 'Node.js', 
  file: `${process.cwd()}\\test\\testing\\folder-1\\file-2.md`,
}];
    
describe('lookUpForLinks', () => {
  it('deberia retornar un array de objetos con las propiedades href, text, y file', () => {
    expect(lookUpForLinks(`${process.cwd()}\\test\\testing\\folder-1`)).toEqual(arrayOfLinks);
  });
});

const result = [{ 
  href: 'https://nodejs.org/api/fs.html#fs_fs_readdir_path_options_callback',
  text: 'Leer un directorio',
  file: `${process.cwd()}\\test\\testing\\folder-2\\file-4.md`,
  status: 200,  
  message: 'OK' },
{ href: 'https://github.com/octokit/rest.js/issu',
  text: 'Hola',
  file: `${process.cwd()}\\test\\testing\\folder-2\\file-4.md`,
  status: 404,
  message: 'Fail' },
{ href: 'SOY-URL-NO-VALIDO',
  text: 'SOY TEXTO',
  file: `${process.cwd()}\\test\\testing\\folder-2\\file-4.md`,
  status: 'No contiene una URL válida',
  message: 'Fail' }];

describe('validateLink', () => {
  it('deberia retornar mi objeto de links mas las propiedades status y message', (done) => {
    validateLink(`${process.cwd()}\\test\\testing\\folder-2`).then(() => {
      expect(validateLink).toEqual(result);
      done();
    }).catch(() => done());
  });
});

describe('totalLinksStats', () => {
  it('deberia retornarme el total de links encontrados', (done) => {
    totalLinksStats(`${process.cwd()}\\test\\testing\\folder-3`)
      .then(() => {
        expect(totalLinksStats).toEqual('Total: 4');
        done();
      }).catch(() => done());
  });
});

describe('uniqueLinksStats', () => {
  it('deberia retornarme el total de links unicos encontrados', (done) => {
    uniqueLinksStats(`${process.cwd()}\\test\\testing\\folder-3`)
      .then(() => {
        expect(uniqueLinksStats).toEqual('Unique: 4');
        done();
      }).catch(err => done());
  });
});

describe('brokenLinksStats', () => {
  it('deberia retornarme el total de links rotos encontrados', (done) => {
    brokenLinksStats(`${process.cwd()}\\test\\testing\\folder-3`)
      .then(() => {
        expect(brokenLinksStats).toEqual('Broken: 1');
        done();
      }).catch(err => done());
  });
});
