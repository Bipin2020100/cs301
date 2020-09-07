// // // function length(str){
// // //   return str.length;
// // // }

// // // let y = ['apple', 'ball', 'cat'];

// // // let x = y.map(a => a.length)
// // // console.log(x)

// // const myStr = "Hello world";
// // for(let s of myStr){
// // console.log(s);
// // }
// // const arr1 = [1,2,3,4];
// // let brr= [];
// // for(let n of arr1){
// // brr[n] = (n *3)
// // }
// // console.log(brr);

// const arr1 = [1,2,3,4];
// // arr1.forEach(function(element){
// console.log(element);
// });

// console.log(arr1.map(n) => n *1)

let student={
  name: "John",
  id: 123,
  course_completed: ['CS301', 'CS303'],
  is_accelerated_track: true,
  getCourseCount: function(){return this.course_completed.length}
}

console.log(student.getCourseCount())