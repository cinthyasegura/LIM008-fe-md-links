import { validateLink } from './resolve-links.js';

const doStats = (resolver, route) => (
  new Promise((resolve, reject) => {
    const linkStatus = validateLink(route);
    linkStatus.then(response => {
      const result = resolver(response);
      resolve(result);
    }).catch(err => reject(err)); 
  })
);
 

export const totalLinksStats = (route) => {
  const resolver = response => `Total: ${response.length}`;
  return doStats(resolver, route);
};

// totalLinksStats('C:\\Users\\CINTHYA\\Documents\\md-links\\LIM008-fe-md-links\\src\\async-try\\mdfolder')
//   .then((resp) => console.log(resp))
//   .catch(err => console.log(err));


export const uniqueLinksStats = route => {
  const resolver = response => `Unique: ${response.filter((links, index, arr) => arr.indexOf(links) === index).length}`;
  return doStats(resolver, route);
};

// uniqueLinksStats('C:\\Users\\CINTHYA\\Documents\\md-links\\LIM008-fe-md-links\\src\\async-try\\mdfolder')
//   .then((resp) => console.log(resp))
//   .catch(err => console.log(err));

export const brokenLinksStats = route => {
  const resolver = response => `Broken: ${response.filter(statusText => statusText.message === 'Fail').length}`;
  return doStats(resolver, route);
};

// brokenLinksStats('C:\\Users\\CINTHYA\\Documents\\md-links\\LIM008-fe-md-links\\src\\async-try\\mdfolder')
//   .then((resp) => console.log(resp))
//   .catch(err => console.log(err));

