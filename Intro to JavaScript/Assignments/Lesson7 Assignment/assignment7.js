prompt = require("prompt-sync")();

let age = prompt("age of the child :");
let weather = prompt("enter current weather as summer or fall or winter or spring :");
age = parseInt(age);
if (age <= 5) {
  if (weather == "summer" || weather == "fall"){ 
    time = "8:30 pm";
  } else {
    time = "8:00 p.m";
  }

}

if (age <= 12){
  if (weather == "summer"){
    time = "9:30 pm";
  } else {
    time = "8:30 pm";
  }
}

if (age >= 13){
  if (weather == "summer"){
    time = "10:30 pm";
  } else {
    time = "9:30 pm";
  }
}
console.log(time);
