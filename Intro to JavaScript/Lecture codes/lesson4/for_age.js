prompt = require("prompt-sync")();

let age = prompt("enter age: ")
age = parseInt(age);

for (let i= 0 ; i<= 18 ; i = i + age) {
  age = prompt("enter age:");

}