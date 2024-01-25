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

// Task 4: Get all books based on Title
app.get('/books/title/:title', (req, res) => {
  const title = req.params.title;
  const booksByTitle = booksDatabase.filter((b) => b.title === title);

  if (booksByTitle.length > 0) {
    res.json(booksByTitle);
  } else {
    res.status(404).json({ error: 'No books found with the given title' });
  }
});

// Additional code for registration, login, etc.

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
