
const wrapper = document.querySelector('.wrapper');
const main = wrapper.querySelector('.main');
const form = wrapper.querySelectorAll('.form-container');
const submitInput = form[0].querySelector('button[type="submit"]');
const cancelInput = form[0].querySelector('.cancel');
const addBook = document.getElementById('bookAdd')



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

/* Generates a new card with book info */
function generateCard(newBook) {
  let card = document.createElement('div');
  card.classList.add("card");
  
  // Create delete button onto card.
  let deleteBtn = document.createElement('button');
  deleteBtn.textContent = "delete";
  deleteBtn.setAttribute('type', 'button');
  deleteBtn.className = "delete";
  card.appendChild(deleteBtn);

  // Fills book information into card.
  for (let property in newBook) {
    if(Object.hasOwn(newBook, property)) {    // Loops only for direct inheritance (no prototype).
      let str = newBook[property];
      let cardContent = document.createElement('p');
      cardContent.textContent = str;
      card.appendChild(cardContent);
    }
  }
/*   console.log(newBook); */
  return card;
}

/* function deleteCard() {
  let card = document.getElementsByClassName('.card');  
  let deleteBtn = document.querySelector('.delete');

  let parent = deleteBtn.parentNode.remove();
}  */

function displayCard(newBook) {
  let card = generateCard(newBook);
  main.appendChild(card);

  function deleteCard() {
    console.log(card.textContent);
    card.remove();
  } 

  // Deletes the card off the webpage and DOM
  let deleteBtn = card.querySelector('.delete');
  deleteBtn.addEventListener('click', deleteCard);

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

// TODO: create a function that removes book from the library.




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
  closeForm();
}


// An implementation for getFormData().
document.addEventListener('DOMContentLoaded', function(){
  submitInput.addEventListener('click', getFormData, false);
}, false);


/* testing purposes */
addBookToLibrary("The Hobbit", ".R.R. Tolkien", 295, true);
addBookToLibrary("Fahrenheit 451", "Ray Bradbury", 256, false);
addBookToLibrary("Lord of the Flies", "William Golding", 224, false);