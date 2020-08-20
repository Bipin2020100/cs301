prompt = require("prompt-sync")();

let age = prompt("input your age: ")
age = parseInt(age);

while (age <= 18){
  age = prompt("input your age: ")
  age = parseInt(age);
}