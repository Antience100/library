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

function Book(author, title, pages, read) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }

  this.id = crypto.randomUUID();

  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;

  function bookInfo() {
    console.log("Author: " + this.author);
    console.log("Title: " + this.title);
    console.log("Pages: " + this.pages);
    console.log("Read: " + this.read);
  }
}

function addBookToLibrary() {
  event.preventDefault();

  checkRadioBtn();

  // Creating the style of the div that holds the information of one book and then appending the book to the book display
  const bookBackground = document.createElement("div");
  bookBackground.classList.add("book-item");
  bookBackground.style.color = "red";
  bookBackground.style.backgroundColor = "#390099";
  bookBackground.style.boxShadow = "0 0 20px #dc143c";
  bookBackground.style.width = "320px";
  bookBackground.style.height = "200px";
  bookBackground.style.borderRadius = "50px";
  bookBackground.style.border = "2px solid #dc143c";
  bookDisplay.appendChild(bookBackground);

  const book = new Book(
    bookAuthor.value,
    bookTitle.value,
    bookPages.value,
    bookRead
  );

  myLibrary.push(book);
  console.log(myLibrary);

  form.style.visibility = "hidden";
  libraryMain.style.visibility = "visible";
  bookDisplay.style.visibility = "visible";

  document.getElementById("form").reset();
}

function checkRadioBtn() {
  if (document.getElementById("read").checked) {
    bookRead = true;
  } else {
    bookRead = false;
  }
}
