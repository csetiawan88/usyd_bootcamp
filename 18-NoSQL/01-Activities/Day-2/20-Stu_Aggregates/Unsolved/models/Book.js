//## Expected Behavior

// When I test the `sum-price` GET route in Insomnia, summary statistics for only books that are in stock should be returned.

// ## Actual Behavior

// When I test the `sum-price` GET route in Insomnia, summary statistics for all books are returned.

// Require schema and model from mongoose
const mongoose = require("mongoose");

// Construct a new instance of the schema class
const bookSchema = new mongoose.Schema({
  // Configure individual properties using Schema Types
  title: { type: String, required: true },
  author: { type: String, required: false },
  // The type of data is set to 'String' and required is set to false, meaning it will accept null values
  publisher: String,
  stockCount: Number,
  price: Number,
  inStock: Boolean,
  // Use built in date method to get current date
  lastAccessed: { type: Date, default: Date.now },
});

// Using mongoose.model() to compile a model based on the schema 'bookSchema'
const Book = mongoose.model("MyBook", bookSchema);

// Create new instances of the model, a document
Book.create([
  { title: "Hello, World", price: 5, inStock: true },
  { title: "Hello World 2.0", price: 10, inStock: false },
  { title: "Hello, World 3,0", price: 7, inStock: true },
  { title: "Hello World 4.0", price: 20, inStock: true },
  { title: "Hello, World 5.0", price: 2, inStock: false },
  { title: "Hello World Infinity", price: 25, inStock: false },
  { title: "Hello World Infinity and Beyond", price: 4, inStock: true },
]);

// Define a route to get summary statistics for in-stock books
app.get("/sum-price", async (req, res) => {
  try {
    // Use the aggregate function to calculate the sum of prices for in-stock books
    const result = await Book.aggregate([
      {
        $match: { inStock: true }, // Filter only in-stock books
      },
      {
        $group: {
          _id: null,
          totalPrice: { $sum: "$price" }, // Calculate the sum of prices
          totalBooks: { $sum: 1 }, // Count the number of books
        },
      },
    ]);

    if (result.length === 0) {
      // Handle case when no in-stock books are found
      res.status(404).json({ message: "No in-stock books found" });
    } else {
      // Return the summary statistics
      res.status(200).json(result[0]);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = Book;
