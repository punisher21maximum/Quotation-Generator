const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://vishalsingh7x7:Maxeffort%4021@cluster0.szioicm.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

async function connectToDatabase() {
  try {
    await client.connect();
    const database = client.db("your_database_name");
    const quotesCollection = database.collection("quotes");

    // Fetch all quotes from the collection
    const quotes = await quotesCollection.find().toArray();

    return quotesCollection;
  } catch (error) {
    console.error("Error connecting to the database:", error);
    throw error;
  }
}

module.exports = {
  connectToDatabase,
};

// run().catch(console.error);

// async function run() {
//   try {
//     await client.connect();
//     const database = client.db("your_database_name"); // Replace 'your_database_name' with your actual database name
//     const quotesCollection = database.collection("quotes"); // You can create a 'quotes' collection

//     // Test connection by inserting a sample document
//     const result = await quotesCollection.insertOne({
//       name: "Sample Quote",
//       expiryDate: "2023-12-31",
//       status: "valid",
//       totalAmount: 1000,
//       files: [],
//       tables: [],
//     });

//     console.log(`Inserted ${result.insertedCount} document(s) into the collection.`);

//   } finally {
//     await client.close();
//   }
// }

// run().catch(console.error);
