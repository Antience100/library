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
  bookBackground.id = "book-background";
  bookBackground.style.color = "red";
  bookBackground.style.backgroundColor = "#390099";
  bookBackground.style.boxShadow = "0 0 20px #dc143c";
  bookBackground.style.width = "320px";
  bookBackground.style.height = "200px";
  bookBackground.style.borderRadius = "10px";
  bookBackground.style.border = "2px solid #dc143c";
  bookBackground.style.padding = "10px";

  bookDisplay.appendChild(bookBackground);
  const bookDisplayBackground = document.getElementById("book-background");
  bookDisplayBackground.style.display = "flex";
  bookDisplayBackground.style.flex;

  const displayAuthor = document.createElement("div");
  displayAuthor.classList.add("book-display-info");
  const displayTitle = document.createElement("div");
  displayTitle.classList.add("book-display-info");
  const displayPages = document.createElement("div");
  displayPages.classList.add("book-display-info");
  const displayRead = document.createElement("div");
  displayRead.classList.add("book-display-info");

  bookDisplayBackground.appendChild(displayAuthor);

  // const displayAuthorInfo = document.createTextNode(author);
  // const displayTitleInfo = document.createTextNode(title);
  // const displayPagesInfo = document.createTextNode(pages);

  // bookDisplayBackground.appendChild();
  // bookDisplayBackground.appendChild();
  // bookDisplayBackground.appendChild();

  console.log(author, title, pages, read, id);
}
