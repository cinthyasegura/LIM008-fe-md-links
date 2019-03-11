[![npm version](https://badge.fury.io/js/%40cinthyasegura%2Fmd-links.svg)](https://badge.fury.io/js/%40cinthyasegura%2Fmd-links.svg)


![npm](https://img.shields.io/npm/v/@cinthyasegura/md-links.svg?style=popout)

# Información

`md-links` herramienta que lee y analiza archivos
en formato `Markdown`, para verificar los links que contengan y reportar
algunas estadísticas.

# Instalación

Para instalar esta librería debemos ejecutar el siguiente comando

         `npm i @cinthyasegura/md-links`

# Uso en la línea de comandos
El ejecutable podra ejecutarse de la siguiente manera a través de la terminal:

`md-links <path-to-file> [options]`

Por ejemplo:

```sh
$ md-links ./some/example.md --validate
$ md-links ./some/example.md --stats
$ md-links ./some/example.md --v --s
```

## Opciones
`--validate o --v`

Si pasamos la opción --validate o --v, el módulo debe hacer una petición HTTP para averiguar si el link funciona o no. Si el link resulta en una redirección a una URL que responde ok, entonces consideraremos el link como ok.

![validate](images\validate.PNG)

El _output_ en este caso incluye la palabra `ok` o `fail` después de
la URL, así como el status de la respuesta recibida a la petición HTTP a dicha
URL.

`--stats o --s`

Si pasamos la opción --stats o --s el output (salida) será un texto con estadísticas básicas sobre los links.

![stats](images\stats.PNG)


`--stats --validate` 

También podemos combinar --stats y --validate para obtener estadísticas que necesiten de los resultados de la validación.

![validate and stats](images\validate-stats.PNG)

`--help`

Te mostrara las posibles opciones que podras utlizar

![ayuda](images\help.PNG)










## Parte obligatoria

Tu módulo debe ser instalable via  Este
módulo debe incluir tanto un _ejecutable_ que podamos invocar en la línea de
comando como una interfaz que podamos importar con `require` para usarlo
programáticamente.




### JavaScript API

El módulo debe poder importarse en otros scripts de Node.js y debe ofrecer la
siguiente interfaz:

#### `mdLinks(path, options)`

##### Argumentos

- `path`: Ruta absoluta o relativa al archivo o directorio. Si la ruta pasada es
  relativa, debe resolverse como relativa al directorio desde donde se invoca
  node - _current working directory_).
- `options`: Un objeto con las siguientes propiedades:
  * `validate`: Booleano que determina si se desea validar los links
    encontrados.

##### Valor de retorno

La función debe retornar una promesa (`Promise`) que resuelva a un arreglo
(`Array`) de objetos (`Object`), donde cada objeto representa un link y contiene
las siguientes propiedades:

- `href`: URL encontrada.
- `text`: Texto que aparecía dentro del link (`<a>`).
- `file`: Ruta del archivo donde se encontró el link.



## Entregables

Módulo instalable via `npm install <github-user>/md-links`. Este módulo debe
incluir tanto un ejecutable como una interfaz que podamos importar con `require`
para usarlo programáticamente.





| Habilidad                                                  | Nivel esperado |
| ---------------------------------------------------------- | -------------- |
| Planificación y organización                               | 4              |
| Autoaprendizaje                                            | 4              |
| Solución de Problemas                                      | 4              |
| Dar y recibir feedback                                     | 4              |
| Adaptabilidad                                              | 4              |
| Trabajo en equipo (trabajo colaborativo y responsabilidad) | 4              |
| Comunicación eficaz                                        | 4              |
| Presentaciones                                             | 4              |



#### ¿Cómo hago para que mi módulo sea _instalable_ desde GitHub?

Para que el módulo sea instalable desde GitHub solo tiene que:

- Estar en un repo público de GitHub
- Contener un `package.json` válido

Con el comando `npm install githubname/reponame` podemos instalar directamente
desde GitHub. Ver [docs oficiales de `npm install` acá](https://docs.npmjs.com/cli/install).

Por ejemplo, el [`course-parser`](https://github.com/Laboratoria/course-parser)
que usamos para la currícula no está publicado en el registro público de NPM,
así que lo instalamos directamente desde GitHub con el comando `npm install
Laboratoria/course-parser`.

### Sugerencias de implementación



Por poner un ejemplo, el _parseado_ (análisis) del markdown para extraer los
links podría plantearse de las siguientes maneras (todas válidas):





### `README.md`

- [ ] Colocar el *pseudo codigo* o *diagrama de flujo* con el algoritmo que
  soluciona el problema.
- [ ] Un board con el backlog para la implementación de la librería.
- [ ] Documentación técnica de la librería.
- [ ] Guía de uso e instalación de la librería



