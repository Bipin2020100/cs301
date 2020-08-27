function addEnds(arr){
  let sum = 0;
    sum = arr[0] + arr[arr.length -1];
    return sum;
  }

  let list = [17,8,9,5,20];
  console.log(addEnds(list));

  