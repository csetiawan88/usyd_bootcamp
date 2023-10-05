const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();
const port = 3001;

const connectionStringURI = `mongodb://127.0.0.1:27017`;

const client = new MongoClient(connectionStringURI);

let db;

const dbName = "numbersDB";

const data = [
  { number: 1 },
  { number: 7 },
  { number: -3 },
  { number: 11 },
  { number: 12 },
  { number: 1000 },
  { number: 8 },
  { number: 2 },
  { number: 15 },
  { number: 4 },
  { number: 2 },
  { number: 90 },
];

async function seedDBAndStartServer() {
  try {
    await client.connect();
    console.log("Connected successfully to MongoDB");
    db = client.db(dbName);
    await db.collection("numberList").deleteMany({});
    await db.collection("numberList").insertMany(data);

    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  } catch (err) {
    console.error("Mongo connection error: ", err.message);
  }
}
seedDBAndStartServer();

app.use(express.json());

// TODO: Update route to use cursor methods
//* It is done when the documents are returned in descending order using MongoDB methods.

//* It is done when the results are limited to five documents.

//* It is done when documents that contain the largest five numbers are skipped.

//* It is done when routes are successfully tested and the results are returned in Insomnia.

app.get("/read", (req, res) => {
  db.collection("numberList")
    .find()
    .sort({ number: -1 }) // Sort in descending order based on the "number" field
    .limit(5) // Limit the results to five documents
    .skip(5) // Skip the first five documents
    .toArray()
    .then((results) => res.send(results))
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    });
});

// app.get("/read", (req, res) => {
//   db.collection("numberList")
//     .find()
//     .toArray()
//     .then((results) => res.send(results))
//     .catch((err) => {
//       if (err) throw err;
//     });
// });
