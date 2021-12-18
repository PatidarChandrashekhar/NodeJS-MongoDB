const { MongoClient } = require('mongodb');
const envconfig = require('../../config/envConfig');

async function main() {
  const uri = envconfig.mongoDBConnection.toString();
  const client = new MongoClient(uri);

  try {
    // Connect to the MongoDB cluster
    await client.connect();

    // Make the appropriate DB calls

    // Create 3 new users in the users collection
    await createMultipleUsers(client, [
      {
        email: 'leslie@example.com',
        name: 'Leslie Yepp'
      },
      {
        email: 'april@example.com',
        name: 'April Ludfence'
      },
      {
        email: 'tom@example.com',
        name: 'Tom Haverdodge'
      }
    ]);

    // Create a unique index on the email field in the users collection.
    // Note that if you run this script when you already have duplicate emails in the user collection,
    // MongoDB will be unable to create the unique index.
    const createIndexResults = await client.db('sample_airbnb').collection('users').createIndex({ 'email': 1 }, { unique: true });
    console.log(`Index successfully created: ${createIndexResults}`);

  } finally {
    // Close the connection to the MongoDB cluster
    await client.close();
  }
}

main().catch(console.error);

/**
 * Create multiple users
 * @param {MongoClient} client A MongoClient that is connected to a cluster with the sample_airbnb database
 * @param {Object[]} newUsers The new users to be added
 */
async function createMultipleUsers(client, newUsers) {
  const result = await client.db('sample_airbnb').collection('users').insertMany(newUsers);

  console.log(`${result.insertedCount} new user(s) created with the following id(s):`);
  console.log(result.insertedIds);
}


module.exports = {
  main,
  createMultipleUsers
};
