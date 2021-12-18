/* eslint-disable prefer-const */
/* eslint-disable require-atomic-updates */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
'use strict';
const SwaggerExpress = require('swagger-express-mw');
const app = require('express')();
const thisModule = 'mongoDBManager.js';
const thisFunction = 'Main';

// Read MongoDB
const readMongo = require('./api/mongodb/read.js');
readMongoDB();

// Create MongoDB
//const createMongo = require('./api/mongodb/create.js');
//createMongoDM();

//Delete MongoDB
//const deleteMongo = require('./api/mongodb/delete.js');
//deleteMongoDM();

//Transaction MongoDB
//const transactionMongo = require('./api/mongodb/transaction.js');
//transactionMongoDM();


async function transactionMongoDM() {
  try {
    let connectDB = await transactionMongo.main();

    console.log('processed successfully');
  } catch (error) {
    console.log('Error during MongoDB connection, please verify');
  }

}


async function deleteMongoDM() {
  try {
    let connectDB = await deleteMongo.main();

    console.log('processed successfully');
  } catch (error) {
    console.log('Error during MongoDB connection, please verify');
  }

}

async function createMongoDM() {
  try {
    let connectDB = await createMongo.main();

    console.log('processed successfully');
  } catch (error) {
    console.log('Error during MongoDB connection, please verify');
  }

}

async function readMongoDB() {
  try {
    let connectDB = await readMongo.main();

    console.log('processed successfully');
  } catch (error) {
    console.log('Error during MongoDB connection, please verify');
  }

}


//Start service
const port = process.env.PORT || 10010;
app.listen(port);
console.log('My service listening at port =>' + port);



