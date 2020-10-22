/*eslint-disable */

var log = console.log; //shortcut for console.log
if (typeof alert === "undefined") var alert = console.log; //this will log in node and alert in browser
if (typeof prompt === "undefined") var prompt = require("prompt-sync")();

class Student {
    constructor(name) {
        this.name = name,
            this.borrowed_Book = [];
    }

    //   borrow(book){
    //       this.borrowed_Book.push(book);
    //   }

}


class libraryCart {
    constructor(student, dueDate) {
        this.student = student;
        this.dueDate = dueDate.setMonth((dueDate.getMonth() + 1) % 12);

    }


    computeCharge(returnDate) {
        if (returnDate > this.dueDate) {
            let overDueDate = Math.round((returnDate - this.dueDate) / 1000 * 60 * 60 * 24);
            let charge = overDueDate * this.book.fine_perday;
            if (charge > this.book.maxFine) {
                return this.book.maxFine;
            } else {
                return charge;
            }
        }
        return 0;
    }

}

class Book {
    constructor(title = "Info", maxFine = 20, fine_perday = 0.5) {
        this.title = title,
            this.maxFine = maxFine,
            this.fine_perday = fine_perday
    }

}


class Library {
    constructor(Books = [], Members = []) {
        this.Books = Books
        this.Members = Members;
    }

    addBook(newBook) {
        this.Books.push(newBook);
    }
    addMember(newMemeber) {
        this.Members.push(newMemeber);
    }
}

let Books = [new Book("Automic Habits"), new Book("365 ways to increase your frequency"), new Book("The power of now"), new Book("The Art of Happiness"),new Book("The Subtle Art Of Not Giving A F*ck"), new Book("The Alchemist")];

let members = [new Student("Aman"), new Student("mohan"), new Student("Bipin")];

let myLibrary = new Library(Books, members);
log(myLabrary);
