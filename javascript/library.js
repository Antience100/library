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
const bookRead = document.getElementById("read");
const bookNotRead = document.getElementById("not-read");

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

formAddBtn.addEventListener("click", function () {
  console.log("Book title: " + bookTitle.value);
});

clearBtn.addEventListener("click", function () {
  const booksToBeCleared = document.querySelectorAll(".book-item");
  booksToBeCleared.forEach((bookToBeCleared) => {
    bookToBeCleared.remove();
  });
});

function Book(author, title, pages, read) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }

  this.id = crypto.randomUUID();

  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(author, title, pages, read) {
  // take params, create a book then store it in the array
  const bookElement = document.createElement("div");
  bookElement.classList.add("book-item");
  bookElement.style.color = "red";
  bookElement.style.backgroundColor = "#390099";
  bookElement.style.boxShadow = "0 0 25px #dc143c";
  bookElement.style.width = "320px";
  bookElement.style.height = "200px";
  bookElement.style.borderRadius = "50px";
  bookElement.style.border = "2px solid #dc143c";
  bookDisplay.appendChild(bookElement);
}
