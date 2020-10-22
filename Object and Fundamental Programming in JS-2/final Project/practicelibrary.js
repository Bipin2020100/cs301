/*eslint-disable */

var log = console.log; //shortcut for console.log
if (typeof alert === "undefined") var alert = console.log; //this will log in node and alert in browser
if (typeof prompt === "undefined") var prompt = require("prompt-sync")();

class application extends Error {}

class Student {
  constructor(name, libraryCard) {
    this.booksOut = [];
    this.name = name;
    // this.libraryCard = libraryCard;
  }
  
}

borrowBook(book) {
 this.bookOut.push(book);
}

returnBook(book) {
  let index = this.booksOut.indexOf(book)// use this for dom manipulation to maintain the container
  this.bookOut.splice(index, 1)
}

// borrowBook() {

// }
// returnBook() {

// }


  // get name() {
  //   return this.name;
  // }

  // set name(name) {
  //   this.name = name;
  // }

  // get libraryCard() {
  //   return this.libraryCard;

  // }

  // set libraryCard(libraryCard) {
  //   this.libraryCard = libraryCard;
  // }




class LibraryCard {
  constructor(book, due_date) {
    this.book = book;
    this.due_date = due_date;
  }

  borrowBook(book) {
    this.bookOut = this.bookOut.push(book);
  }

  // returnBook(book) {
  //   let index = this.booksOut.indexOf(book)
  //   this.bookOut = this.bookOut.splice(index, 1)
  // }

// }

class Book {
  constructor(title, issueDate, charge, max_fine) {
    this.title = title;
    this.issueDate = new Date();
    this.dueDate = (this.issueDate() + 10);
    this.returnDate = new Date()
  }
}

class Library {
  constructor(books=[], students=[]) {
    this.books = books;
    this.students = students;
  }
  addStudent(newStudent) {
    this.students.set(newStudent.name, newStudent);
  }
  addBooks(newBook) {
    this.book.set()(newBook.name, newBook)
  }

}

const book = new Map();
book.set("Automic Habits", new Book("Automic Habits", due date));
book.set("The power of now", new Book("The power of now", due date));
book.set("365 ways to increase your vibration", new Book("365 ways to increase your vibration", due date));

const students = new Map();
students.set("Bipin", new Student("Bipin", new LibraryCard()));

const library = new Library(book, students);
library.addStudent(new Student("Ryan", new LibraryCard()));