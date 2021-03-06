# Trabajo Practico para TTADS 2017

__Frontend con nuevas tecnología para [The Movie DB](www.themoviedb.org)__

``` javascript
var tp = {
  anio: 2017,
  integrantes : [{
    nombre : "Andrés de la Grana",
    legajo : 41034
  }, {
    nombre : "Arian Valles",
    legajo : 41556
  }, {
    nombre : "Marani Matias Ezequiel",
    legajo : 39710
  }]
}
console.log(tp.integrantes);
```

## Introducción.

Decidimos usar VueJS, una framework de frontend que en los últimos años ha crecido la cantidad de desarrolladores que lo eligen para sus proyectos, por su facilidad implementar y simpleza.

Otra de las razones que los integrantes del equipo no lo conocíamos y decidimos aprender a usarlo junto con las librerías que forman parte del desarrollo como ser webpack.

## Planificación.

Acordamos dedicar un mínimo de 5 hs semanales.

Planeamos tener la aplicación andado para el ~~27 de Septiembre 2017~~.
Re-programamos la fecha de entrega para el 4 de octubre del 2017.

### Reuniones de avance

|Fecha|Tareas completadas desde la última reunión| Blockers |Tareas a realizar hasta la próxima reunión|
|-----|------------------------------------------|----------|------------------------------------------|
|09-08| leer documentación sobre las tecnologías, base del proyecto, repositorio git || unir vuex con la base| listado de las ultimas películas con css mínimos |
|17-08|Todo los integrantes del grupo conocen la base y como trabajar en el proyecto||realizar componentes en movie para mostrar la info de la película.|
|23-08|Todo los integrantes del equipo por telegram|framework de CSS nuevo para integrantes del equipo y el usar pug como pre-procesador de HTML también desconocido|se agregaron test unitarios con cobertura en forma de ejemplo|hacer los componentes paginador, barra de búsqueda,componente para motrar mejor la informacion de la pelicula ,ejemplos de test unitarios |
|30-08|Suspendida para el 01|||
|01-09|Todo los integrantes por telegram|no tener disponibilidad de tiempo paginador no terminado|componente paginador y componente para puntear las películas|
|13-09|Todo los integrantes de equipo en el bar de la facultad||barra de búsqueda en header, mejorar estilo en el componente movieInfo, ejemplos test e2e, login de usuario|
|29-09|Todo los integrantes por telegram||recargar discovery estando de search y hacer click en home y entregar el proyecto|

## Documentación.

### Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080 for dev
npm start

# build for production with minification
npm run build
```

### Tests

A medida que le entendimiento de como usar VueJS fue creciendo nos dimos cuenta porque se nos complico para hacer algunos test, es solo echo de no usar el framework de manera mas flexible complicaba seguir la doc de vuejs para los test unitarios ,por esa razón no deben seguirse al pie del código para sus proyectos.

Para los test e2e deberían acercase bastante ala realidad.

``` bash
# global
npm isntall -g karma

# run unit tests with code coverage
npm run unit

# run e2e tests
npm start & npm run e2e

# Run test
npm start
npm test
```

### Entregables Online

Documentación Online por medio de este readme en github.io

[App Online](https://goo.gl/56DvWA)

``` bash
# run build app in online-app and using on github page.
npm run build
```

## Material adicional.

Generales.
* [garkdown](https://guides.github.com/features/mastering-markdown/)
* [server tmdb](https://github.com/utnfrrottads/tmdb-server) [API](https://www.themoviedb.org/documentation/api/discover) **API Key** _Cuenta -> configuracion -> api -> crear -> developer -> aceptar -> llenar from -> copiar la key_ [api doc](https://developers.themoviedb.org/3/getting-started)
* [awesome-vue](https://github.com/vuejs/awesome-vue)

Librerías que usamos.
* [vue](https://vuejs.org/)
  * [vue-router](https://github.com/vuejs/vue-router) [Doc ES](https://router.vuejs.org/es/)
  * [vuex](https://github.com/vuejs/vuex)
  * [axios](https://github.com/mzabriskie/axios) _Promise based HTTP client_
* [webpack](https://webpack.js.org/)
  * [templates](https://github.com/vuejs-templates/webpack-simple)
* [semantic-ui](https://semantic-ui.com/)
* [Less](lesscss.org)
* [pugjs](pugjs.org) es para HTML como less para los CSS [HTML2PUG](https://www.beautifyconverter.com/html-to-jade-converter.php)
* [vue-markdown-loader](https://github.com/QingWei-Li/vue-markdown-loader) Renderisa los archivos markdown en HMTL, como los hacer PUG o LESS en los componentes. Usa [markdown-it](https://github.com/markdown-it/markdown-it) para generar el HTML.

Herramientas de Código.
* ~~[jshint](https://github.com/jshint/jshint)~~
* [eslint](https://eslint.org) [reglas](https://eslint.org/docs/rules/)

Test unit
* [Karma](https://github.com/karma-runner/karma)
* [Mocha](https://mochajs.org/)
* [phantomjs](http://phantomjs.org/)
* [vue-test-utils](https://github.com/vuejs/vue-test-utils/)
* [Avoriaz](https://github.com/eddyerburgh/avoriaz)

Test e2e
* [Nightwatch](http://nightwatchjs.org/)
    * [Browser Drivers Setup](http://nightwatchjs.org/gettingstarted#selenium-server-setup)
    * [Xpath cheatsheet](http://ricostacruz.com/cheatsheets/xpath.html)
* [selenium](http://docs.seleniumhq.org/download/)
* [magellan](https://github.com/TestArmada/magellan)

* Descargar Drivers automaticamente.
  * [selenium-server-standalone-jar](https://github.com/adamhooper/selenium-seirver-standalone-jar)
  * [node-geckodriver](https://github.com/vladikoff/node-geckodrive)
  * [node-chromedriver](https://github.com/giggio/node-chromedriver)

  Pero para tener una mejor idea de como trabaja, dejamos los binarios en test/e2e/bin, git no debería seguir los binarios, otra opción es en Linux agregar los path para los binarios `profile`

Otras librerías.
* [vue-resource](https://github.com/pagekit/vue-resource) _Promise base HTTP for VueJS object_
* [vue-search-select](https://github.com/moreta/vue-search-select)
* [vue-simple-boilerplate](https://github.com/vuejs-templates/simple)
* [vee-validate](https://github.com/baianat/vee-validate)
* [vue-axios](https://github.com/imcvampire/vue-axios)
* [http-server](https://www.npmjs.com/package/http-server)

Ejemplos.
* https://github.com/coligo-io/notes-app-vuejs-vuex
* https://github.com/iamshaunjp/vuejs-playlist _(ver ramas)_
* https://github.com/iamshaunjp/vuex-playlist _(ver ramas)_
* https://medium.com/wdstack/vue-vuex-getting-started-f78c03d9f65

Herramientas.
* [vue-cli](https://github.com/vuejs/vue-cli)
* [generator-fountain-webapp](https://github.com/fountainjs/generator-fountain-webapp)
