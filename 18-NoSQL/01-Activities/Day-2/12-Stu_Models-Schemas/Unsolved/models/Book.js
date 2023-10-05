const mongoose = require("mongoose");

// TODO: Add a comment describing the functionality of the code below
//Define a Mongoose schema for books:
//This code defines a schema for books with various fields such as title, author, publisher, stockCount, price, inStock, and lastAccessed. Some fields have specific data types, and the "lastAccessed" field has a default value of the current date and time.

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: false },
  publisher: String,
  stockCount: Number,
  price: Number,
  inStock: Boolean,
  lastAccessed: { type: Date, default: Date.now },
});

// TODO: Add a comment describing the functionality of the code below
//Create a Mongoose model for books using the schema:
//This line creates a Mongoose model named "Book" based on the "bookSchema" schema. This model will be used to interact with the MongoDB collection associated with books.
const Book = mongoose.model("Book", bookSchema);

const handleError = (err) => console.error(err);

// TODO: Add a comment describing the functionality of the code below
//Create a new book document using the "Book" model:
//This code creates a new book document in the MongoDB collection using the "Book" model. It specifies values for various fields and handles the promise with .then() and .catch() to log the result or handle errors.
Book.create({
  title: "Diary of Anne Frank",
  author: "Anne Frank",
  publisher: "Scholastic",
  stockCount: 10,
  price: 10,
  inStock: true,
})
  .then((result) => console.log("Created new document", result))
  .catch((err) => handleError(err));

// TODO: Add a comment describing the difference between this instance being created
// and the instance that was created above
//Create two more book documents with missing or minimal information:
//These two blocks of code create additional book documents with varying levels of information. The first block provides an author and publisher, while the second block only provides the title. The purpose seems to be to demonstrate how the schema handles missing fields or fields with no specified data type.

Book.create({
  title: "Oh the Places You Will Go!",
  author: "Dr. Seuss",
})
  .then((result) => console.log("Created new document", result))
  .catch((err) => handleError(err));

// TODO: Add a comment describing the difference between this instance being created
// and the instance that was created above
Book.create({ title: "Harold and the Purple Crayon" })
  .then((result) => console.log("Created new document", result))
  .catch((err) => handleError(err));

module.exports = Book;
