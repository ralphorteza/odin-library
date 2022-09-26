
const wrapper = document.querySelector('.wrapper');
const form = wrapper.querySelectorAll('.form-container');
const submitInput = form[0].querySelector('button[type="submit"]');

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

// Object isntances for testing.
let theHobbit = new Book("The Hobbit", ".R.R. Tolkien", 295, true);
let fahrenheit451 = new Book("Fahrenheit 451", "Ray Bradbury", 256, false);
let lordOfTheFlies = new Book("Lord of the Flies", "William Golding", 224, false);

let newBook;
let library = [];
//let library = [theHobbit, lordOfTheFlies, fahrenheit451];


// TODO : create a for loop to display all the books in console.
function displayBooks(library) {
  library.forEach(book => {
    console.log(`${book.info()}`);
  });
}

// TODO: function to add a new book into the library
function addBookToLibrary(title, author, pages, read) {
  newBook = new Book(title, author, pages, read);
  library.push(newBook);
}

/* Form functionality */

const addBook = document.getElementById('bookAdd');
addBook.addEventListener('click', openForm);

/* TODO: get form elements from popup */ 
function getFormData(e) {
  e.preventDefault();

  let formData = new FormData(form[0]);
  alert(formData.get('title') +" "+ formData.get('author')
  +" "+ formData.get("pages") +" "+ formData.get('read'));

  let t = formData.get('title');
  let a = formData.get('author');
  let p = formData.get('pages');
  let r = true; // temporary data

  addBookToLibrary(t, a, p, r);
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

document.addEventListener('DOMContentLoaded', function(){
  submitInput.addEventListener('click', getFormData, false);
}, false);


/* displayBooks(library);
 */