import { totalLinksStats, uniqueLinksStats, brokenLinksStats } from './controller/stats.js';
import { validateLink } from './controller/validate.js';

export const validateAndStats = (route, options) => {
  if (options.stats && !options.validate) {
    return Promise.all([
      totalLinksStats(route),
      uniqueLinksStats(route)
    ]).then(resp => resp.forEach(values => console.log(values))).catch(err => err);
  } else if (options.stats && options.validate) {
    return Promise.all([
      totalLinksStats(route),
      uniqueLinksStats(route),
      brokenLinksStats(route)
    ]).then(resp => resp.forEach(values => console.log(values)));
  } else if (options.validate && !options.stats) {
    return validateLink(route)
      .then((resp) => {
        resp.forEach(values => console.log(` Path: ${values.file}\n Link: ${values.href}\n Status: ${values.status}\n StatusText: ${values.message}\n Text: ${values.text}\n`));
      }).catch(err => err);
  } else {
    return validateLink(route)
      .then((resp) => {
        resp.forEach(values => console.log(` Path: ${values.file}\n Link: ${values.href}\n Text: ${values.text}\n`));
      }).catch(err => err);
  }
};


