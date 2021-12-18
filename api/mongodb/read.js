const { MongoClient } = require('mongodb');
const envconfig = require('../../config/envConfig');

async function main() {
  const uri = envconfig.mongoDBConnection.toString();
  const client = new MongoClient(uri);

  try {
    // Connect to the MongoDB cluster
    await client.connect();

    // Find the listing named "Infinite Views" that we created in create.js
    await findOneListingByName(client, "Infinite Views");

    // Find up to 5 listings with at least 4 bedrooms and at least 2 bathrooms
    // If you recently ran create.js, a listing named Beautiful Beach House should be included in the results
    await findListingsWithMinimumBedroomsBathroomsAndMostRecentReviews(client, {
      minimumNumberOfBedrooms: 4,
      minimumNumberOfBathrooms: 2,
      maximumNumberOfResults: 5
    });

  } finally {
    // Close the connection to the MongoDB cluster
    await client.close();
  }
}

main().catch(console.error);

/**
 * Print an Airbnb listing with the given name
 * Note: If more than one listing has the same name, only the first listing the database finds will be printed.
 * @param {MongoClient} client A MongoClient that is connected to a cluster with the sample_airbnb database
 * @param {String} nameOfListing The name of the listing you want to find
 */
async function findOneListingByName(client, nameOfListing) {
  const result = await client.db("sample_airbnb").collection("listingsAndReviews").findOne({ name: nameOfListing });

  if (result) {
    console.log(`Found a listing in the collection with the name '${nameOfListing}':`);
    console.log(result);
  } else {
    console.log(`No listings found with the name '${nameOfListing}'`);
  }
}

/**
 * Print Airbnb listings with a minimum number of bedrooms and bathrooms.
 * Results will be limited to the designated maximum number of results.
 * Results will be sorted by the date of the last review in descending order.
 * @param {MongoClient} client A MongoClient that is connected to a cluster with the sample_airbnb database
 * @param {object} queryParams The query params object
 * @param {number} queryParams.minimumNumberOfBedrooms The minimum number of bedrooms
 * @param {number} queryParams.minimumNumberOfBathrooms The minimum number of bathrooms
 * @param {number} queryParams.maximumNumberOfResults The maximum number of Airbnb listings to be printed
 */
async function findListingsWithMinimumBedroomsBathroomsAndMostRecentReviews(client, {
  minimumNumberOfBedrooms = 0,
  minimumNumberOfBathrooms = 0,
  maximumNumberOfResults = Number.MAX_SAFE_INTEGER
} = {}) {

  const cursor = client.db("sample_airbnb").collection("listingsAndReviews")
    .find({
      bedrooms: { $gte: minimumNumberOfBedrooms },
      bathrooms: { $gte: minimumNumberOfBathrooms }
    }
    )
    .sort({ last_review: -1 })
    .limit(maximumNumberOfResults);

  // Store the results in an array
  const results = await cursor.toArray();

  // Print the results
  if (results.length > 0) {
    console.log(`Found listing(s) with at least ${minimumNumberOfBedrooms} bedrooms and ${minimumNumberOfBathrooms} bathrooms:`);
    results.forEach((result, i) => {
      const date = new Date(result.last_review).toDateString();

      console.log();
      console.log(`${i + 1}. name: ${result.name}`);
      console.log(`   _id: ${result._id}`);
      console.log(`   bedrooms: ${result.bedrooms}`);
      console.log(`   bathrooms: ${result.bathrooms}`);
      console.log(`   most recent review date: ${date}`);
    });
  } else {
    console.log(`No listings found with at least ${minimumNumberOfBedrooms} bedrooms and ${minimumNumberOfBathrooms} bathrooms`);
  }
}

module.exports = {
  main,
  findOneListingByName,
  findListingsWithMinimumBedroomsBathroomsAndMostRecentReviews
};
