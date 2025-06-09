const bookBtn = document.getElementById("add-book-btn");
const clearBtn = document.getElementById("clear-books-btn");
const form = document.getElementById("form");
const libraryMain = document.querySelector(".library-main");
const formCancelBtn = document.getElementById("cancel-btn");
const formAddBtn = document.getElementById("add-btn");
const bookDisplay = document.querySelector(".book-display");

const bookTitle = document.getElementById("title");
const bookAuthor = document.getElementById("author");
const bookPages = document.getElementById("pages");

let bookRead = false;
let totalBooks = 0;

const myLibrary = [];

bookBtn.addEventListener("click", function () {
  form.style.visibility = "visible";
  libraryMain.style.visibility = "hidden";
  bookDisplay.style.visibility = "hidden";
});

formCancelBtn.addEventListener("click", function () {
  form.style.visibility = "hidden";
  libraryMain.style.visibility = "visible";
  bookDisplay.style.visibility = "visible";
});

formAddBtn.addEventListener("click", function () {});

clearBtn.addEventListener("click", function () {
  const booksToBeCleared = document.querySelectorAll(".book-item");
  booksToBeCleared.forEach((bookToBeCleared) => {
    bookToBeCleared.remove();
  });
  myLibrary.length = 0;
});

function Book(author, title, pages) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }

  this.id = crypto.randomUUID();

  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = bookRead;
}

function addBookToLibrary() {
  event.preventDefault();

  checkRadioBtn();

  const book = new Book(
    bookAuthor.value,
    bookTitle.value,
    bookPages.value,
    bookRead
  );

  myLibrary.push(book);
  totalBooks++;

  form.style.visibility = "hidden";
  libraryMain.style.visibility = "visible";
  bookDisplay.style.visibility = "visible";

  document.getElementById("form").reset();
  createBookDisplay(book.author, book.title, book.pages, bookRead, book.id);
}

function checkRadioBtn() {
  if (document.getElementById("read").checked) {
    bookRead = true;
  } else {
    bookRead = false;
  }
}

function createBookDisplay(author, title, pages, read, id) {
  // Creating the style of the div that holds the information of one book and then appending the book to the book display
  const bookBackground = document.createElement("div");
  bookBackground.classList.add("book-item");
  bookBackground.id = id;
  bookBackground.style.color = "red";
  bookBackground.style.backgroundColor = "#390099";
  bookBackground.style.boxShadow = "0 0 20px #dc143c";
  bookBackground.style.width = "280px";
  bookBackground.style.height = "100%";
  bookBackground.style.borderRadius = "10px";
  bookBackground.style.border = "2px solid #dc143c";
  bookBackground.style.padding = "10px";
  bookBackground.style.display = "flex";
  bookBackground.style.flexDirection = "column";
  bookBackground.style.justifyContent = "space-between";
  bookBackground.style.alignItems = "flex-start";
  bookBackground.style.gap = "6px";
  bookDisplay.appendChild(bookBackground);

  const displayAuthor = document.createElement("div");
  displayAuthor.classList.add("book-display-info");
  displayAuthor.textContent = "Author: " + author;
  const displayTitle = document.createElement("div");
  displayTitle.classList.add("book-display-info");
  displayTitle.textContent = "Title: " + title;
  const displayPages = document.createElement("div");
  displayPages.classList.add("book-display-info");
  displayPages.textContent = "Pages: " + pages;
  const displayRead = document.createElement("div");
  displayRead.classList.add("book-display-info");
  if (bookRead === true) {
    displayRead.textContent = "Read";
  } else {
    displayRead.textContent = "Not read";
  }

  const displayRemoveBtn = document.createElement("button");
  const displayReadStatusBtn = document.createElement("button");

  displayRemoveBtn.addEventListener("click", function () {
    removeBook(id);
  });

  displayReadStatusBtn.addEventListener("click", function () {
    const bookToChange = myLibrary.find((book) => book.id === id);
    console.log(bookToChange.read);
    if (bookToChange.read === true) {
      bookToChange.read = false;
      displayRead.textContent = "Not read";
    } else if (bookToChange.read === false) {
      bookToChange.read = true;
      displayRead.textContent = "Read";
    }
  });

  displayRemoveBtn.classList.add("book-remove-btn");
  displayRemoveBtn.textContent = "Remove";
  displayReadStatusBtn.classList.add("book-read-status-btn");
  displayReadStatusBtn.textContent = "Read Status";

  bookBackground.append(displayAuthor);
  bookBackground.append(displayTitle);
  bookBackground.append(displayPages);
  bookBackground.append(displayRead);
  bookBackground.append(displayReadStatusBtn);
  bookBackground.append(displayRemoveBtn);
}

function removeBook(id) {
  for (let i = 0; i < myLibrary.length; i++) {
    if (myLibrary[i].id === id) {
      myLibrary.splice(i);
      const divToRemove = document.getElementById(id);
      divToRemove.remove();
    }
  }
}
