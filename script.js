

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

/*   this.info = function() {
    let strInfo = title + ", by " + author + ", " + pages + " pages, ";
    let strRead = (read === true ? "already read." : "not yet read.");
    return strInfo + strRead;
  } */
}

let myLibrary = [
  {
		title: 'test1',
		author: 'test',
		pages: 123,
		read: true
	},
	{
		title: 'test2',
		author: 'test',
		pages: 123,
		read: false
	},
	{
		title: 'test3',
		author: 'test',
		pages: 123,
		read: true
	},
	{
		title: 'test4',
		author: 'test',
		pages: 123,
		read: false
	},
	{
		title: 'test5',
		author: 'test',
		pages: 123,
		read: true
	}
];

function addBookToLibrary() {
  // do stuff here
}

// TODO : create a for loop to display all the books in console.
function displayAllBooks(myLibrary) {
  for (let i = 0; i < myLibrary.length; i++) {
    let bookCard = myLibrary[i].title + ", by " + myLibrary[i].author +
    ", " + myLibrary[i].pages + " pages. ";
    let strRead = ( myLibrary[i].read === true ? "already read." : "not yet read.");
    
    console.log(bookCard+strRead);
  }
}

displayAllBooks(myLibrary);