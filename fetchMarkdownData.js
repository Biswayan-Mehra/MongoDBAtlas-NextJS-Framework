// Import the necessary modules
require('dotenv').config({ path: './.env.local' }); // This line loads the environment variables from your .env.local file
const { MongoClient } = require('mongodb');
const fs = require('fs').promises;
const path = require('path');

console.log('URI:', process.env.MONGODB_URI);
console.log('DB Name:', process.env.MONGODB_DB);

// Use environment variables for the MongoDB connection URI and Database Name
const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB;
const collectionName = "markdownFiles"; // The name of the collection where your data is stored

// Async function to fetch data from MongoDB and save it to a JSON file
async function fetchMarkdownData() {
   const client = new MongoClient(uri);

    try {
        // Connect to the MongoDB client and select the database
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        // Fetch the data
        const data = await collection.find({}).toArray();

        // Specify the path and filename of the JSON file to save the data to
        const filePath = path.join(__dirname, 'markdownData.json');

        // Write the data to the JSON file, converting it to a JSON string
        await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf-8');
        console.log('Data has been successfully saved to markdownData.json');
    } catch (error) {
        console.error('Failed to fetch and save markdown data:', error);
    } finally {
        // Ensure the MongoDB client is closed after operations are complete
        await client.close();
    }
}

// Execute the function
fetchMarkdownData();
