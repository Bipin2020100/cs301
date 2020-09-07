 "use strict";
// //  actually it is not necessary to split beacuse strings are already treated as arrays.
// function titleCase(s) {
//   let length = s.length;
//   let arr = s.split("");
//   let sum = ""
//   for (let i = 0; i < length; i++) {
//     if (i === 0) {
//       sum = arr[i].toUpperCase(arr[i]);
//     } else {
//       sum = sum + arr[i];
//     }
//   }
//   return sum;
// }
// let b = "bipin";
// let output = titleCase(b);
// console.log(output);

function titlecase(str){
  let sum = "";
  for (let i = 0 ; i < str.length ; i ++){
    if ( i == 0 ){
      sum = str[i].toUpperCase();
    } else{
      sum += str[i]
    } 
  }
  return sum;
  
}


console.log(titlecase('bipin'))