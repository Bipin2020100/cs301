
/* eslint-disable */

var log = console.log; //shortcut for console.log
if (typeof alert === "undefined") var alert = console.log; //this will log in node and alert in browser
if (typeof prompt === "undefined") var prompt = require("prompt-sync")(); //this will prompt in node and not affect browser prompt

// function Clock({ template }) {
  
//   let timer;

//    bipin = function() {
//     let date = new Date();

//     let hours = date.getHours();
//     if (hours < 10) hours = '0' + hours;

//     let mins = date.getMinutes();
//     if (mins < 10) mins = '0' + mins;

//     let secs = date.getSeconds();
//     if (secs < 10) secs = '0' + secs;

//     let output = template
//       .replace('h', hours)
//       .replace('m', mins)
//       .replace('s', secs);

//     console.log(output);
//     timer = setInterval(bipin, 1000);
//   }

//   this.stop = function() {
//     clearInterval(timer);
//   };

//   // this.start = function() {
//   //   this.bipin();
//   //   timer = setInterval(bipin, 1000);
//   // };

// }
// // Clock.bipin()
// let clock = new Clock({template: 'h:m:s'});
// // clock.start();
// clock.bipin()

// class User {
//   constructor(name) { this.name = name; }
//   sayHi() { alert(this.name); }
// }

// // proof: User is a function

// class squu{
//   constructor(a){this.length = a}
//   area(){return this.length * this.length}
// }

// let bb = squu(4);
// log(bb)

function Dog(name){
  this.name = name;
    this.walk = function(){
      alert(this.name + ' is walking . . ');
    }
    return 1
}

let myDog =  Dog('Candy');
 console.log(myDog);
 myDog.walk();