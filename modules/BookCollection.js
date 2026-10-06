import { Book } from './Book.js';

export class BookCollection {
  constructor() {
    this.books = JSON.parse(localStorage.getItem('books')) || [];
  }

  addBook = (title, author) => {
    if (!title || !author) return;
    const newBook = new Book(title, author);
    this.books.push(newBook);
    this.saveAndRender();
  };

  removeBook = (id) => {
    this.books = this.books.filter((book) => book.id !== id);
    this.saveAndRender();
  };

  saveAndRender = () => {
    localStorage.setItem('books', JSON.stringify(this.books));
    this.renderBooks();
  };

  renderBooks = () => {
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = '';

    if (this.books.length === 0) {
      bookList.innerHTML = '<p class="empty-msg">No books available in the collection.</p>';
      return;
    }

    this.books.forEach((book, index) => {
      const bookRow = document.createElement('div');
      bookRow.className = `book-item ${index % 2 === 0 ? 'even' : 'odd'}`;
      bookRow.innerHTML = `
        <span>"${book.title}" by ${book.author}</span>
        <button class="remove-btn" data-id="${book.id}">Remove</button>
      `;
      bookList.appendChild(bookRow);
    });

    document.querySelectorAll('.remove-btn').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const id = e.target.getAttribute('data-id');
        this.removeBook(id);
      });
    });
  };
}