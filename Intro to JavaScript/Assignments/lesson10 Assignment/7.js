function rotateRight(arr) {
  const arr1 = [];
  let j = 1;
  for (let i = 0; i < (arr.length); i++) {
    if (i === arr.length - 1) {
      arr1[0] = arr[arr.length - 1];
    } else {
      arr1[j] = arr[i];
    }
    j++;
  }
  
  return arr1;
}

let list = [17, 8, 9, 5, 20]
let rotate = rotateRight(list);
console.log(rotate);