const express = require('express');
const app = express();
const PORT = 3000;

// Dummy database for demonstration purposes
const booksDatabase = [
  { ISBN: '123456', title: 'Book1', author: 'Author1', review: 'Good book' },
  { ISBN: '789012', title: 'Book2', author: 'Author2', review: 'Excellent read' },
  // Add more books as needed
];

// Task 2: Get the books based on ISBN
app.get('/books/:isbn', (req, res) => {
  const isbn = req.params.isbn;
  const book = booksDatabase.find((b) => b.ISBN === isbn);

  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ error: 'Book not found' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
