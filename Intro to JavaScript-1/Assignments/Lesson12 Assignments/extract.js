
"use strict";
const prompt = require ("prompt-sync")();
let fullName = prompt("Enter full name with , in between :")


function extractGivenName(name){
  let firstName = name.split(",");
  let final = firstName[1];
return final;
}

let output = extractGivenName(fullName);
console.log(output);