const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = 3000;

// Dummy database for demonstration purposes
const booksDatabase = [
  { ISBN: '123456', title: 'Book1', author: 'Author1', review: 'Good book' },
  { ISBN: '789012', title: 'Book2', author: 'Author2', review: 'Excellent read' },
  // Add more books as needed
];

// Dummy user database for demonstration purposes
const usersDatabase = [];

// Middleware to parse JSON data
app.use(bodyParser.json());

// Task 5: Get book Review
app.get('/books/review/:isbn', (req, res) => {
  const isbn = req.params.isbn;
  const book = booksDatabase.find((b) => b.ISBN === isbn);

  if (book) {
    res.json({ review: book.review });
  } else {
    res.status(404).json({ error: 'Book not found' });
  }
});

// Task 6: Delete book Review
app.delete('/books/review/:isbn', (req, res) => {
  const isbn = req.params.isbn;
  const bookIndex = booksDatabase.findIndex((b) => b.ISBN === isbn);

  if (bookIndex !== -1) {
    // Delete the review for the specified book
    booksDatabase[bookIndex].review = undefined;
    res.json({ message: 'Review deleted successfully' });
  } else {
    res.status(404).json({ error: 'Book not found' });
  }
});

// Additional code for registration, login, etc.

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
