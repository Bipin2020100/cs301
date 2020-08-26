const arr = ["apple", "ball", "cat"];

function map(arr1){
const temp_arr=[];
for (let i = 0 ; i < arr.length ; i++){
  temp_arr[i]= arr[i].length;
}

return temp_arr;

}
console.log(map(arr))

