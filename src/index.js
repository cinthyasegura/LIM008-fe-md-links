import { validateLink } from './controller/validate.js';
import { lookUpForLinks } from './controller/links.js';
import { prependListener } from 'cluster';

// export const validateAndStats = (route, options) => {
//   if (options.stats && !options.validate) {
//     return Promise.all([
//       totalLinksStats(route),
//       uniqueLinksStats(route)
//     ]);
//   } else if (options.stats && options.validate) {
//     return Promise.all([
//       totalLinksStats(route),
//       uniqueLinksStats(route),
//       brokenLinksStats(route)
//     ]);
//   } else if (options.validate && !options.stats) {
//     return validateLink(route).then(resp => resp).catch(err => console.log(err));
//   } else {
//     return validateLink(route).then(resp => resp).catch(err => console.log(err));
//   }
// };


export const mdLinks = (route, options) => {
  if (options.validate) {
    return validateLink(route).then(resp => resp).catch(err => err);
  } else if (!options.validate) {
    return new Promise(resolve => resolve(lookUpForLinks(route)));
  } else if (options.stats) {
    console.log('Esa opcion no existe');
  }
};