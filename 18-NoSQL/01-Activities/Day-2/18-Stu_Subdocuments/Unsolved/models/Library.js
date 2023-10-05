const mongoose = require("mongoose");

// TODO: Define a new schema named `bookSchema` for the subdocument
const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  genre: { type: String },
  // Add more fields as needed
});

const librarySchema = new mongoose.Schema({
  name: { type: String, required: true },
  //
  // TODO: Add the `books` subdocument to the parent document as an array
  //
  books: [bookSchema], // Adding `books` as an array of subdocuments
  lastAccessed: { type: Date, default: Date.now },
});

// TODO: Create a model named `Library`
const Library = mongoose.model("Library", librarySchema);

// TODO: Create a new instance of the model including the subdocuments
const myLibrary = new Library({
  name: "My Library",
  books: [
    {
      title: "Book 1",
      author: "Author 1",
      genre: "Fiction",
    },
    {
      title: "Book 2",
      author: "Author 2",
      genre: "Non-Fiction",
    },
    // Add more books as needed
  ],
});

module.exports = Library;
