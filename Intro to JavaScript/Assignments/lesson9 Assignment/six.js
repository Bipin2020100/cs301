const prompt = require ("prompt-sync")();

function houseVolume(width, depth , height , sweep){
let houseVolume = livingVolume(width , depth , height) + roofVolume(width, depth, sweep);
return houseVolume;
}

function livingVolume(width, depth, height){
  let livingVolume = width * depth * height;
  console.log(livingVolume);
  return livingVolume;
}

function roofVolume(width, depth, sweep){
let roofVolume = triangleArea(depth, sweep , sweep) * width;
console.log(roofVolume);
return roofVolume;

}

function triangleArea(depth, sweep, sweep){
  let s = (depth + sweep + sweep)/ 2;
  let triangleArea = Math.sqrt(s*(s-depth)*(s-sweep)*(s-sweep));
  console.log(triangleArea);
  return triangleArea;
}

houseVolume(10,20,10,30);
// console.log(houseVolume(10,20,10,30))
console.log(livingVolume(20,30,20))