const { MongoClient } = require('mongodb');
const envconfig = require('../../config/envConfig');

async function main() {
  const uri = envconfig.mongoDBConnection.toString();
  const client = new MongoClient(uri);

  try {
    // Connect to the MongoDB cluster
    await client.connect();

    // Make the appropriate DB calls

  } finally {
    // Close the connection to the MongoDB cluster
    await client.close();
  }
}

main().catch(console.error);

// Add functions that make DB calls here


module.exports = {
  main
};
