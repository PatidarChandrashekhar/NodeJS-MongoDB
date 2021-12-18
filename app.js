/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
'use strict';

let SwaggerExpress = require('swagger-express-mw');
let app = require('express')();
//Get DB module
//const executeSQL = require('./api/Utilities/sqlrun.js');

module.exports = app; // for testing

let config = {
  appRoot: __dirname // required config
};

SwaggerExpress.create(config, (err, swaggerExpress) => {
  if (err) { throw err; }

  // install middleware
  swaggerExpress.register(app);

  let port = process.env.PORT || 10010;
  app.listen(port);

  if (swaggerExpress.runner.swagger.paths['/hello']) {
    console.log('try this:\ncurl http://127.0.0.1:' + port + '/hello?name=Scott');
  }
});



