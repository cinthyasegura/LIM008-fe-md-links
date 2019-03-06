import { validateLink } from './resolve-links.js';


export const linkStats = (route, callback) => {
  const linkStatus = validateLink(route);
  linkStatus.then(response => {
    const responseFilter = response.filter(statusMessage => statusMessage.message === 'OK');
    callback(responseFilter.length);
  }).catch(err => callback(err));
};
const consoleando = (total) => console.log(total);

linkStats('C:\\Users\\CINTHYA\\Documents\\md-links\\LIM008-fe-md-links\\src\\async-try\\mdfolder', consoleando);