 /*eslint-disable */

 var log = console.log; //shortcut for console.log
 if (typeof alert === "undefined") var alert = console.log; //this will log in node and alert in browser
 if (typeof prompt === "undefined") var prompt = require("prompt-sync")();

 let foundBook;
 let stdFound;
 let libraryCartObj;
 let table;
 console.log(myLibrary);

 function pullStudent() {
   let studentName = document.getElementById("student_name").value;
  //  for (let student of myLabrary.Members) {
    //  console.log(`${student.name} + ${studentName}`);
    for (let student of myLibrary.Members) {
     if (student.name === studentName) {
      stdFound = student;
       libraryCartObj = new libraryCart(student, new Date());
       document.getElementById("info").innerHTML = "Welcome " + studentName + ". Please select the books";
       break;
     } else {
       document.getElementById("info").innerHTML = studentName + " Error: student name not found.";
     }
   }
   
 }

 function addBook(e) {

   if (stdFound == null) {
     document.getElementById("info").innerHTML = " Error: student name not found. Please type student name first ";
     return;
   }
   let bookName = e.target.parentNode.value;
   for (let book of myLibrary.Books) {
     if (book.title === bookName) {
       foundBook = book;
       break;
     }
   }
   // console.log(libraryCartObj);
   libraryCartObj.student.borrowed_Book.push(foundBook);
   let tr = document.createElement("tr");
   table = document.getElementById("library_cart");
   table.append(tr);
  //  console.log(foundBook);
   let td1 = document.createElement("td");
   td1.innerHTML = foundBook.title;
   let td2 = document.createElement("td");
   td2.innerHTML = libraryCartObj.dueDate;
   tr.append(td1);
   tr.append(td2);
 }

 function resetTable() {


   table = document.getElementById("library_cart");
   table.innerHTML = "";
   let tr = document.createElement("tr")
   table.append(tr);
   let th1 = document.createElement("th");
   th1.innerHTML = "Book";
   let th2 = document.createElement("th");
   th2.innerHTML = "DueDate";
   tr.append(th1);
   tr.append(th2);

 }

 function borrow() {

   console.log(libraryCartObj);
   alert('Your book is successfully borrowed');

   resetTable();
 }


 function returnBook() {

   console.log(libraryCartObj.computeCharge())
   alert('Your book is successfully returned');
   resetTable();

 }