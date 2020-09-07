// "strict all";

function replaceAll(string, parm1, param2) {
  let arr = string.split(" ");
  let brr = [];
  for (let i = 0; i < arr.length ; i++) {
    if (arr[i] === parm1) {
      arr[i] = param2;
    }
    brr[i] = arr[i];
  }
  return brr.join(" ");
}

let string = "She said Hi and I replied Hi";
let b = "Hi";
let c = "Hello";

let output = replaceAll(string, b, c)
console.log(output);