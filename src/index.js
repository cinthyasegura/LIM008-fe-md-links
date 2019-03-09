import { totalLinksStats, uniqueLinksStats, brokenLinksStats } from './controller/stats.js';
import { validateLink } from './controller/validate.js';


// const options = {
//   validate: true,
//   stats: true
// }; 


export const validateAndStats = (route, options) => {
  let promises = 0;
  if (options.stats && !options.validate) {
    promises = Promise.all([
      totalLinksStats(route),
      uniqueLinksStats(route)
    ]).then(resp => resp.forEach(values => console.log(values))).catch(err => err);
  } else if (options.stats && options.validate) {
    promises = Promise.all([
      totalLinksStats(route),
      uniqueLinksStats(route),
      brokenLinksStats(route)
    ]).then(resp => resp.forEach(values => console.log(values)));
  } else if (options.validate && !options.stats) {
    validateLink(route)
      .then((resp) => {
        resp.forEach(values => console.log(` Path: ${values.file}\n Link: ${values.href}\n Status: ${values.status}\n StatusText: ${values.message}\n Text: ${values.text}\n`));
      }).catch(err => err);
  } else {
    validateLink(route)
      .then((resp) => {
        resp.forEach(values => console.log(` Path: ${values.file}\n Link: ${values.href}\n Text: ${values.text}`));
      }).catch(err => err);
  }
  return promises;
};
  
// validateAndStats('C:\\Users\\CINTHYA\\Documents\\md-links\\LIM008-fe-md-links\\test\\testing\\folder-2\\file-4.md', options);


