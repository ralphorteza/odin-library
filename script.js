

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// Inherits Book object.
Book.prototype.info = function() {
  let strInfo = this.title + ", by " + this.author + ", " + this.pages + " pages, ";
  let strRead = (this.read === true ? "already read." : "not yet read.");
  return strInfo + strRead;
}

let theHobbit = new Book("The Hobbit", ".R.R. Tolkien", 295, true);
let fahrenheit451 = new Book("Fahrenheit 451", "Ray Bradbury", 256, false);
let lordOfTheFlies = new Book("Lord of the Flies", "William Golding", 224, false);
let library = [theHobbit, lordOfTheFlies, fahrenheit451];


// TODO : create a for loop to display all the books in console.
function displayBooks(library) {
  library.forEach(book => {
    console.log(`${book.info()}`);
  });
}

// TODO: function to add a new book into the library
function addBookToLibrary() {
  
}

displayBooks(library);
