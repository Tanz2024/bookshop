// Sample book data
const books = [
  { title: "Professional JavaScript", price: 25 },
  { title: "Professional Python", price: 30 },
  { title: "Professional Java", price: 28 }
];

// Function to display books
function displayBooks() {
  const booksContainer = document.getElementById("books");
  books.forEach(book => {
    const bookElement = document.createElement("div");
    bookElement.classList.add("book");
    bookElement.innerHTML = `<h3>${book.title}</h3>
                             <p>Price: $${book.price}</p>
                             <button onclick="addToCart('${book.title}', ${book.price})">Add to Cart</button>`;
    booksContainer.appendChild(bookElement);
  });
}

// Function to add a book to the shopping cart
function addToCart(title, price) {
  const cartItems = document.getElementById("cart-items");
  const totalElement = document.getElementById("total-price");
  
  // Create a new list item for the cart
  const listItem = document.createElement("li");
  listItem.textContent = `${title} - $${price}`;
  
  // Add the item to the cart
  cartItems.appendChild(listItem);
  
  // Update the total price
  const totalPrice = parseFloat(totalElement.textContent);
  totalElement.textContent = (totalPrice + price).toFixed(2);
}
