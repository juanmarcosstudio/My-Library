const myLibrary = []

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.toggleRead = function() {
    this.read = !this.read;
};

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    displayBooks();
}

function displayBooks() {
    const libraryContainer = document.getElementById('library');
    libraryContainer.innerHTML = '';

    myLibrary.forEach((book, index) => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');

        bookCard.innerHTML =`
            <h2>${book.title}</h2>
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
            <p>Read: ${book.read ? "Yes" : "No"}</p>
            <button onclick="toggleReadStatus(${index})">Toggle Read Status</button>
            <button onclick="removeBook(${index})">Remove Book</button>`;

            libraryContainer.appendChild(bookCard);
    });
}