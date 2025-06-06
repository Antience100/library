const bookBtn = document.getElementById("book-btn");
const form = document.getElementById("form");
const libraryMain = document.querySelector(".library-main");
const formCancelBtn = document.getElementById("cancel-btn");
const formAddBtn = document.getElementById("add-btn");

const bookTitle = document.getElementById("title");
const bookAuthor = document.getElementById("author");
const bookPages = document.getElementById("pages");
const bookRead = document.getElementById("read");
const bookNotRead = document.getElementById("not-read");

const myLibrary = [];

bookBtn.addEventListener("click", function () {
  form.style.visibility = "visible";
  libraryMain.style.visibility = "hidden";
});

formCancelBtn.addEventListener("click", function () {
  form.style.visibility = "hidden";
  libraryMain.style.visibility = "visible";
});

formAddBtn.addEventListener("click", function () {
  console.log("Book title: " + bookTitle.value);
});

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // take params, create a book then store it in the array
}
