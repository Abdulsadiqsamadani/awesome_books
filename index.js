import { BookCollection } from './modules/BookCollection.js';
import { displayCurrentDate } from './modules/DateUtils.js';
import { initNavigation } from './modules/Navigation.js';

document.addEventListener('DOMContentLoaded', () => {
  const collection = new BookCollection();
  collection.renderBooks();

  initNavigation();
  displayCurrentDate();
  setInterval(displayCurrentDate, 1000);

  const form = document.getElementById('add-book-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const titleInput = document.getElementById('title-input');
    const authorInput = document.getElementById('author-input');

    collection.addBook(titleInput.value.trim(), authorInput.value.trim());

    titleInput.value = '';
    authorInput.value = '';
  });
});