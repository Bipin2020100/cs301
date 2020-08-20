prompt = require("prompt-sync")();

let person = prompt("Enter student or fauclty or other: ");
let overdue = prompt ("Number of books overdue last year");
overdue = parseInt(overdue);
if ( person = "studnet"){
  if ( overdue === 0){
    ld = "6 weeks";
  } else if (overdue < 3){
    ld = "4 weeks";
  } else
   ld = "2 weeks";
}
else if (person = "faculty"){
    if (overdue === 0){
      ld = "16 weeks";
    } else if ( ovedue < 3){
      ld = "12 weeks";
    } else 
    ld = "8 weeks";
}
else if (person = "other"){
   if ( overdue === 0){
     ld = "4 weeks";
   } else if ( overdue < 3){
     ld = "3 weels";
   } else 
   ld = "2 weeks";
}
console.log(ld);
