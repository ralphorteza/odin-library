
const wrapper = document.querySelector('.wrapper');
const main = wrapper.querySelector('.main');
const form = wrapper.querySelectorAll('.form-container');
const submitInput = form[0].querySelector('button[type="submit"]');
const cancelInput = form[0].querySelector('.cancel');
const addBook = document.getElementById('bookAdd')

let newBook;
/******************** Library Functionality ********************/
class Library {
  constructor() {
    this.books = [];
  }

  // Displays book instances in console.
  displayBooks() {
    this.books.forEach(book => {
      console.log(`${book.info()}`);
    });
  }

  // Adds a new book into the library.
  addBookToLibrary(title, author, pages, read) {
    newBook = new Book(title, author, pages, read);
    this.books.push(newBook);
    displayCard(newBook);
  }

}
const library = new Library();



/******************** Book functionality ********************/

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



/******************** Card Functionality ********************/

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
    let index = library.books.findIndex(book =>
      book.author === cardAuthor && book.pages == cardPage);
      console.log(index);
      library.books.splice(index, 1);
      console.table(library.books);
  }

  // Deletes the card off the webpage and DOM
  let deleteBtn = card.querySelector('.delete');
  deleteBtn.addEventListener('click', deleteCard);

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

  library.addBookToLibrary(t, a, p, r);
  closeForm();
}

// An implementation for getFormData().
document.addEventListener('DOMContentLoaded', function(){
  submitInput.addEventListener('click', getFormData, false);
}, false);

/* testing purposes */
library.addBookToLibrary("The Hobbit", "R.R. Tolkien", "295", true);
library.addBookToLibrary("Fahrenheit 451", "Ray Bradbury", "256", false);
library.addBookToLibrary("Lord of the Flies", "William Golding", "224", false);