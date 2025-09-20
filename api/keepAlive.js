const { MongoClient } = require("mongodb");

const uri = process.env.MONGODB_URI;

async function handler(req, res) {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged MongoDB Atlas cluster successfully");
    res.status(200).json({ message: "Cluster pinged" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Ping failed" });
  } finally {
    await client.close();
  }
}

module.exports = handler;
