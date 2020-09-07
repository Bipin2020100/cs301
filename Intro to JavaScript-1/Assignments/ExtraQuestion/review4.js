'use strict';

function string(str) {
  let filtered_array = [];
  let j = 0;
  for (let i = 0; i < str.length; i++) {
    if (str(i) === "_") {
      break;
    }
    filtered_array[j] = str[i];
    j = j + 1;
  }
  return filtered_array
}
console.log(string['this', 'that', 'hi_there', 'How_are_you'])