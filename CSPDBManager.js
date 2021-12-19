/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
'use strict';
const app = require('express')();
const envconfig = require('./config/envConfig');

const { MongoClient } = require('mongodb');
const uri = envconfig.mongoDBConnection.toString();
const client = new MongoClient(uri);
// Read MongoDB
//const readMongo = require('./api/cspdb/read.js');
//readMongoDB(client);

// Create MongoDB
const createMongo = require('./api/cspdb/create.js');
createMongoDM(client);

//Delete MongoDB
//const deleteMongo = require('./api/mongodb/delete.js');
//deleteMongoDM();

//Transaction MongoDB
//const transactionMongo = require('./api/mongodb/transaction.js');
//transactionMongoDM();


async function transactionMongoDM() {
  try {
    const connectDB = await transactionMongo.main();

    console.log('processed successfully');
  } catch (error) {
    console.log('Error during MongoDB connection, please verify');
  }

}


async function deleteMongoDM() {
  try {
    const connectDB = await deleteMongo.main();

    console.log('processed successfully');
  } catch (error) {
    console.log('Error during MongoDB connection, please verify');
  }

}

async function createMongoDM(client) {
  try {
    const connectDB = await createMongo.createAddresses(client);
    console.log('processed successfully');
  } catch (error) {
    console.log('Error during MongoDB connection, please verify');
  } finally {
    // Close the connection to the MongoDB cluster
    await client.close();
  }

}

async function readMongoDB(client) {
  try {
    const connectDB = await readMongo.getAddress(client);
    console.log('processed successfully');
  } catch (error) {
    console.log('Error during MongoDB connection, please verify');
  } finally {
    // Close the connection to the MongoDB cluster
    await client.close();
  }
}


//Start service
const port = process.env.PORT || 10010;
app.listen(port);
console.log('My service listening at port =>' + port);



