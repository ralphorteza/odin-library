
const wrapper = document.querySelector('.wrapper');
const main = wrapper.querySelector('.main');
const form = wrapper.querySelectorAll('.form-container');
const submitInput = form[0].querySelector('button[type="submit"]');
const cancelInput = form[0].querySelector('.cancel');
const addBook = document.getElementById('bookAdd')

let library = [];
let newBook;




/******************** Book functionality ********************/

/* function Book(title, author, pages, read) {
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
} */

class Book {
  constructor (
    title = 'unknown',
    author = 'unknown',
    pages = 0,
    read = false 
  ) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}



/******************** Library functionality ********************/

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
  return card;
}


function displayCard(newBook) {
  let card = generateCard(newBook);
  main.appendChild(card);

  function deleteCard() {
    let cardChildren = card.childNodes;
    let cardAuthor = cardChildren[2].textContent;
    let cardPage = cardChildren[3].textContent;

    removeFromLibrary(cardAuthor, cardPage);
    card.remove();
  }

  function removeFromLibrary(cardAuthor, cardPage) {
    let index = library.findIndex(book =>
      book.author === cardAuthor && book.pages == cardPage);
      console.log(index);
      library.splice(index, 1);
      console.table(library);
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
addBookToLibrary("The Hobbit", "R.R. Tolkien", "295", true);
addBookToLibrary("Fahrenheit 451", "Ray Bradbury", "256", false);
addBookToLibrary("Lord of the Flies", "William Golding", "224", false);