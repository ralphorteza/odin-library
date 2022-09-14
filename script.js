

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.info = function() {
    let strInfo = title + ", by " + author + ", " + pages + " pages, ";
    let strRead = (read === true ? "already read." : "not yet read.");
    return strInfo + strRead;
  }
}

const hobbit = new Book("The Hobbit", "J.R.R. Tolkien", "295", true);
const bookA = new Book("Book A", "authorA", "555", false);
const bookB = new Book("Book B", "Author b", "432", true);

let myLibrary = [hobbit, bookA, bookB];

function addBookToLibrary() {
  // do stuff here
}

// TODO : create a for loop to display all the books in console.
function displayAllBooks(myLibrary) {
  for (let book in myLibrary) {
    let isOwn = myLibrary.hasOwnProperty(book);
    isOwn.info();
  }
}