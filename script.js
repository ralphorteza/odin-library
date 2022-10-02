
const wrapper = document.querySelector('.wrapper');
const main = wrapper.querySelector('.main');
const form = wrapper.querySelectorAll('.form-container');
const submitInput = form[0].querySelector('button[type="submit"]');
const cancelInput = form[0].querySelector('.cancel');

const addBook = document.getElementById('bookAdd');





/******************** Book functionality ********************/

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// Inherits Book object.
Book.prototype.info = function() {
  let strInfo = this.title + ", by " + this.author + ", " + this.pages + " pages, ";
  let strRead = (this.read === true ? "completed." : "not completed.");
  return strInfo + strRead;
}





/******************** Library functionality ********************/

//let library = [theHobbit, lordOfTheFlies, fahrenheit451];
// Object isntances for testing.
/* let theHobbit = new Book("The Hobbit", ".R.R. Tolkien", 295, true);
let fahrenheit451 = new Book("Fahrenheit 451", "Ray Bradbury", 256, false);
let lordOfTheFlies = new Book("Lord of the Flies", "William Golding", 224, false); */
let newBook;
let library = [];

// TODO: create a function that generates a default card.
function generateCard() {
  let card = document.createElement('div');
  card.classList.add("card");
  return card;
}

// TODO: modify displayBooks() to show as cards in the web page.
function displayCard(newBook) {
  // let card = document.createElement('div');
  // card.classList.add("card");
  
  let card = generateCard();
  for (let property in newBook) {
    if(Object.hasOwn(newBook, property)) {    // Loops only for direct inheritance (no prototype).
      let str = newBook[property];
      let cardContent = document.createElement('p');
      cardContent.textContent = str;
      card.appendChild(cardContent);
    }
  }
  main.appendChild(card);
}

// Displays book instances in console.
function displayBooks(library) {
  library.forEach(book => {
    console.log(`${book.info()}`);
  });
}

// Adds a new book into the library.
function addBookToLibrary(title, author, pages, read) {
  newBook = new Book(title, author, pages, read);
  library.push(newBook);
  displayCard(newBook);
}





/******************** Form functionality ********************/

addBook.addEventListener('click', openForm);
cancelInput.addEventListener('click', closeForm);

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

// Retrieves form data from pop-up form.
function getFormData(e) {
  e.preventDefault();

  let formData = new FormData(form[0]);

  let t = formData.get('title');
  let a = formData.get('author');
  let p = formData.get('pages');
  let rRaw = formData.get('read');
  let r = (rRaw === "completed" ? true : false);

  addBookToLibrary(t, a, p, r);
/*   displayCard(); */
  closeForm();
}


// An implementation for getFormData().
document.addEventListener('DOMContentLoaded', function(){
  submitInput.addEventListener('click', getFormData, false);
}, false);

