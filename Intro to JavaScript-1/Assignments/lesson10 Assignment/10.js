"use strict";

const prompt = require("prompt-sync")();

let dayNo = prompt("Enter a day: ");
dayNo = parseInt(dayNo);
let out  ;
let output = "";
const day = ["first" , "second", "third" , "fourth", "fifth" , "sixth", "seventh", "eighth", "nineth", "tenth", "eleventh", "twelve"];
const gifts = ["a partridge in a pear tree",
" two turtle doves",
"three French hens" ,
"four calling birds",
"five golden rings",
" six geese a laying",
 "seven swans a swimming",
"eight maids a milking",
"nine ladies dancing",
"ten lords a leaping",
"eleven pipers piping",
"twelve drummers drumming"]



for (let i = 0 ; i < dayNo ; i++){
  out = `On the ${day[i]} day of Christmas, my love gave to me : ${gifts[i]}`
  output = output + out;
}
console.log(output);

