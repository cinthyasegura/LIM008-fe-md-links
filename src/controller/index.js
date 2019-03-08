import { totalLinksStats, uniqueLinksStats, brokenLinksStats } from './stats.js';
import { validateLink } from './resolve-links.js';

let options = {
  validate: true,
  stats: false
};
  
export const validateAndStats = (route, options) => {
  let promises = null;
  if (options.stats && options.validate === false) {
    promises = Promise.all([
      totalLinksStats(route),
      uniqueLinksStats(route)
    ]).then(resp => resp.forEach(values => console.log(values))).catch(err => err)
  } else if (options.stats && options.validate) {
    promises = Promise.all([
      totalLinksStats(route),
      uniqueLinksStats(route),
      brokenLinksStats(route)
    ]).then(resp => resp.forEach(values => console.log(values)));
  } else if (options.validate && options.stats === false) {
    const resultValidateLink = validateLink(route);
    resultValidateLink.then((resp) => {
      resp.forEach(values => console.log(values.file, values.href, values.status, values.message, values.text));
    }).catch(err => err);
  }
  return promises;
};
  
// validateAndStats('C:\\Users\\CINTHYA\\Documents\\md-links\\LIM008-fe-md-links\\test\\testing\\folder-1', options);

