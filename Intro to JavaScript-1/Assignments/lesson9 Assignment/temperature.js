const prompt = require("prompt-sync")()

function farhToCels(x){
  let cls = (x - 32)*(5/9);
  console.log(cls)
}

farhToCels(20)