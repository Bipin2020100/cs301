"use strict";
const prompt = require("prompt-sync")()

function isPalindrome(string) {
  let out = "";
  for (let i = string.length - 1; i >= 0; i--) {
    out = out + string[i];
  }
  if (out == string) {
    return true;
  } else {
    return false;
  }
}

  let x = prompt("Enter the string to check Palindrome: ")
  x = x.toUpperCase();

  console.log(isPalindrome(x));