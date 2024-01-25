const express = require('express');
const app = express();
const PORT = 3000;

// Dummy database for demonstration purposes
const booksDatabase = [
  { ISBN: '123456', title: 'Book1', author: 'Author1', review: 'Good book' },
  { ISBN: '789012', title: 'Book2', author: 'Author2', review: 'Excellent read' },
  // Add more books as needed
];

// Task 1: Get the book list available in the shop
app.get('/books', (req, res) => {
  res.json(booksDatabase);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
