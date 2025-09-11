
const Library_Table = document.getElementById("LibraryTable");
const myLibrary = [];
let totalBooks = 0;

function Book(author, title, numberOfPages, isReadIt) {
  // the constructor...
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }

  this.author = author;
  this.title = title;
  this.numberOfPages = numberOfPages;
  this.isReadIt = isReadIt;
}

function addBookToLibrary(author, title, numberOfPages, isReadIt ) {
  // take params, create a book then store it in the array
  const newBook = new Book(author, title, numberOfPages, isReadIt);
  myLibrary.push(newBook);
  totalBooks += 1;
}

function displayBooks() {
    console.log("Total of books in the Library = " + totalBooks);
    
    for(let i = 0; i < totalBooks ; i++){
        console.log(myLibrary[i]);
        const author_Cell = document.createElement("td");
        author_Cell.textContent = myLibrary[i].author;
        const title_Cell = document.createElement("td");
        title_Cell.textContent = myLibrary[i].title;
        const totalPages_Cell = document.createElement("td");
        totalPages_Cell.textContent = myLibrary[i].numberOfPages;
        const isReadIt_Cell = document.createElement("td");
        isReadIt_Cell.textContent = myLibrary[i].isReadIt;

        const newBook_Row = document.createElement("tr");
        newBook_Row.appendChild(author_Cell);
        newBook_Row.appendChild(title_Cell);
        newBook_Row.appendChild(totalPages_Cell);
        newBook_Row.appendChild(isReadIt_Cell);
        
        Library_Table.appendChild(newBook_Row);
    }
}

const author1 = "shakespeare";
const title1 = "Romeo and Juliet ";
const numberOfPages1 = 400;
const isReadIt1 = true;

addBookToLibrary(author1, title1, numberOfPages1, isReadIt1 ) 

const author2 = "Asimov";
const title2 = "Fundation";
const numberOfPages2 = 600;
const isReadIt2 = false;

addBookToLibrary(author2, title2, numberOfPages2, isReadIt2 ) 

displayBooks();