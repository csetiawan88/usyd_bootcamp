-- Add your code below and execute file in MySQL Shell --
SELECT 
favourite_books.book_name AS name, book_prices.price AS price
FROM favorite_books
JOIN book_prices ON favorite_books.book_prices = book_prices.id;