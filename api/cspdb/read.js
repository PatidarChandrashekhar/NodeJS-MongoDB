async function getAddress( client) {

  try {
    // Connect to the MongoDB cluster
    await client.connect();

    // Find the listing named "Infinite Views" that we created in create.js
    await findOneAddressByName(client, 'CSP');

  } finally {
    // Close the connection to the MongoDB cluster
    //await client.close();
  }
}

getAddress().catch(console.error);

/**
 * Print an Airbnb listing with the given name
 * Note: If more than one listing has the same name, only the first listing the database finds will be printed.
 * @param {MongoClient} client A MongoClient that is connected to a cluster with the sample_airbnb database
 * @param {String} nameOfListing The name of the listing you want to find
 */
async function findOneAddressByName(client, nameOfListing) {
  const result = await client.db('CSPDB').collection('tblAddress').findOne({ Name: nameOfListing });

  if (result) {
    console.log(`Found a listing in the collection with the name '${nameOfListing}':`);
    console.log(result);
  } else {
    console.log(`No listings found with the name '${nameOfListing}'`);
  }
}


module.exports = {
  getAddress
};
