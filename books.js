// Library book feature
const books = [];

function addBook(title, author) {
  const book = { id: books.length + 1, title, author, available: true };
  books.push(book);
  console.log(`Added: ${title} by ${author}`);
  return book;
}

function listBooks() {
  return books;
}

module.exports = { addBook, listBooks };
