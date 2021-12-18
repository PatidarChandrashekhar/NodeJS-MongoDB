'use strict';
//const _= require('lodash');

const config = {
  NODE_ENV: 'development',
  APP_NAME: 'MongoDBTest',
  APP_CODE: 'CSP00',
  mongoDBConnection: 'mongodb+srv://UserName:Password@cluster0.bxrrt.mongodb.net/sample_airbnb?retryWrites=true&w=majority'
};


if (process.env.VCAP_APPLICATION) {
  config.NODE_ENV = process.env.NODE_ENV === null ? config.NODE_ENV : process.env.NODE_ENV.trim();
  config.APP_NAME = process.env.APP_NAME === null ? config.APP_NAME : process.env.APP_NAME.trim();
  config.APP_CODE = process.env.APP_CODE === null ? config.APP_CODE : process.env.APP_CODE.trim();
  config.mongoDBConnection = process.env.mongoDBConnection.trim();
};

module.exports = config;
