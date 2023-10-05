// TODO: Define a new schema named `bookSchema`
const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: false },
  publisher: String,
  stockCount: Number,
  price: Number,
  inStock: Boolean,
  lastAccessed: { type: Date, default: Date.now },
});
// TODO: Create a custom instance method named `getDiscount`
bookSchema.methods.getDiscount = function (discountPercentage) {
  const discountedPrice = this.price - (this.price * discountPercentage) / 100;
  return discountedPrice;
};

// TODO: Create a model named `Book`
const Book = mongoose.model("Book", bookSchema);

// TODO: Create a new instance of the model
const bookInstance = new Book({
  title: "Sample Book",
  author: "Sample Author",
  publisher: "Sample Publisher",
  stockCount: 100,
  price: 20,
  inStock: true,
});

// TODO: Call the custom instance method on the instance
const discountPercentage = 10;
const discountedPrice = bookInstance.getDiscount(discountPercentage);
console.log(`Discounted Price: $${discountedPrice}`);

module.exports = Book;
