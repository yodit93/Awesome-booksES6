import { books, Books } from './books.js';

const adminUser = new Books();

function render() {
  const cont = document.querySelector('.container');
  cont.innerHTML = '';
  books.forEach((book) => {
    const elem = document.createElement('div');
    elem.className = 'book-cont';
    elem.innerHTML = `<p class="title">"${book.title}" </p>
    <p class="author">by ${book.author}</p>
    <button id=${book.id} class="remove">Remove</button>`;
    cont.appendChild(elem);

    const removeBtn = elem.querySelector('.remove');
    removeBtn.addEventListener('click', (e) => {
      const deleteButton = e.target;
      const idToDelete = deleteButton.id;
      adminUser.removeBooks(idToDelete);
      render();
    });
  });
}

export { adminUser, render };