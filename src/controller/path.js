const path = require('path');

export const filterMdFiles = contentArr => {
  return contentArr.filter(file => path.extname(file) === '.md');
};

