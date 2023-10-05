const express = require("express");
const db = require("./config/connection");
// TODO: Add a comment describing the functionality of the code below
//Import the "Book" model:
//This line imports the "Book" model, which was likely defined elsewhere in the application. This model allows you to interact with the MongoDB collection of books.

const { Book } = require("./models");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Define a route to retrieve all books:

app.get("/all-books", async (req, res) => {
  try {
    // TODO: Add a comment describing the functionality of the code below

    //This code defines an HTTP GET route at the path "/all-books." When a client makes a GET request to this route, it tries to retrieve all books from the MongoDB database using the Book.find({}) method, which returns all documents in the "Book" collection. If successful, it responds with a JSON representation of the books (status 200). If there's an error, it responds with a 500 Internal Server Error message.
    const result = await Book.find({});
    res.status(200).json(result);
  } catch (err) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
