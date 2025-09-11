
const Library_Table = document.getElementById("LibraryTable");
let Library_Table_Body = document.getElementById("LibraryTable_Body");
const body_container = document.getElementById("body_container");
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

    Library_Table_Body.remove();
    Library_Table_Body = document.createElement("tbody");
    Library_Table_Body.setAttribute("id","LibraryTable_Body");
    

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
        
        Library_Table_Body.appendChild(newBook_Row);
    }
    Library_Table.appendChild(Library_Table_Body);
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


/* prevent the normal action from submit button (sending the info to the server)*/

function buttonClick(event) {
  event.preventDefault();
}

function submitForm(){

    const author = document.getElementById("author_name").value;
    const title = document.getElementById("title_book").value;
    const numberOfPages = document.getElementById("total_pages").value;
    const isReadIt = document.getElementById("select_option").value;
    
    addBookToLibrary(author, title, numberOfPages, isReadIt );
    displayBooks();
}

const addBookButton = document.getElementById("addBook_button");

addBookButton.addEventListener("click", buttonClick, false);
addBookButton.addEventListener("click", submitForm, false);

