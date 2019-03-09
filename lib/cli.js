#!/usr/bin/env node
"use strict";

var _index = require("./index.js");

const args = process.argv.slice(2);
const options = {
  validate: false,
  stats: false
};
const path = args[0];

if (args.length === 0) {
  console.log('Ingresa una ruta, ejemplo: md-links ./some/example \n');
} // const message = () => {
//   console.log(`\n Uso: \n\n$ md-links <route> <options> \n\n<route> es la ruta del archivo o carpeta a evaluar \n<options> tendrán los valores de:
// --stats, muestra cantidad de links y cantidad de links únicos \n--validate, muestra ruta de archivo, texto de referencia, link, estado de link \n--stats --validate, muestra cantidad de links, cantidad de links únicos y cantidad de links rotos`);
// }
// si solo ingresa la ruta


if (args.length === 1) {
  (0, _index.validateAndStats)(path, options);
} // if (args[0] === '--help') {
//   message();
// }


if (args.length === 2) {
  if (args[1] === '--validate' || args[1] === '--v') {
    options.validate = true;
    (0, _index.validateAndStats)(path, options);
  } else if (args[1] === '--stats' || args[1] === '--s') {
    options.stats = true;
    (0, _index.validateAndStats)(path, options);
  }
}

if (args.length === 3) {
  if ((args[1] === '--validate' || args[1] === '--v') && (args[2] === '--stats' || args[2] === '--s')) {
    options.validate = true;
    options.stats = true;
    (0, _index.validateAndStats)(path, options);
  } else if ((args[1] === '--stats' || args[1] === '--s') && (args[2] === '--validate' || args[2] === '--v')) {
    options.validate = true;
    options.stats = true;
    (0, _index.validateAndStats)(path, options);
  }
}