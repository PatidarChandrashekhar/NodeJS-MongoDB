
async function createAddresses(client) {
  try {
    await client.connect();

    // Create a single new listing
    await createAddress(client,
      {
        Name: 'David',
        Address: 'Ontario ',
        Cell: 44668800,
        PostalCode: 'J8X3N4'
      }
    );

    // Create 2 new listings
    await createMultipleAddress(client, [
      {
        Name: 'Sam',
        Address: 'Canada ',
        Cell: 44668800,
        PostalCode: 'J8X3N4'
      },
      {
        Name: 'Rajesh',
        Address: 'Ajax',
        Cell: 44668800,
        PostalCode: 'J8X3N4'
      }
    ]);

  } finally {
    // Close the connection to the MongoDB cluster
    //await client.close();
  }
}

createAddresses().catch(console.error);

/**
 * Create a new Airbnb listing
 * @param {MongoClient} client A MongoClient that is connected to a cluster with the sample_airbnb database
 * @param {Object} newListing The new listing to be added
 */
async function createAddress(client, newListing) {
  const result = await client.db('CSPDB').collection('tblAddress').insertOne(newListing);
  console.log(`New listing created with the following id: ${result.insertedId}`);
}

/**
 * Create multiple Airbnb listings
 * @param {MongoClient} client A MongoClient that is connected to a cluster with the sample_airbnb database
 * @param {Object[]} newListings The new listings to be added
 */
async function createMultipleAddress(client, newListings) {
  const result = await client.db('CSPDB').collection('tblAddress').insertMany(newListings);

  console.log(`${result.insertedCount} new listing(s) created with the following id(s):`);
  console.log(result.insertedIds);
}


module.exports = {
  createAddresses
};
