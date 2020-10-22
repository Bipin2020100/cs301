
/*eslint-disable */

var log = console.log; //shortcut for console.log
if (typeof alert === "undefined") var alert = console.log; //this will log in node and alert in browser
if (typeof prompt === "undefined") var prompt = require("prompt-sync")();

let shoppingCart = [];

function add(evt) { //evt -- pizza , pasta
    console.log(evt.target.parentNode.value);
    let foodItem = canteen.foodItems.get(evt.target.parentNode.value); //pizza after button click
    console.log(foodItem);
    shoppingCart.push(foodItem);
    updateShoppingCart(foodItem);
}

function updateShoppingCart(foodItem) {
    let table = document.getElementById("shopping_cart");
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    //<table>
    // <tr> 
     //   <td> PIZA </td>
    //     <td> 20</td>
    //  </tr>
    //</table>
    td1.innerHTML = foodItem.name; 
    td2.innerHTML = foodItem.price_in_points;
    tr.append(td1);
    tr.append(td2);
    table.append(tr);
}

let currentStudent;

function pullInfo() {
    let student = canteen.students.get(document.getElementById("student_name").value);
    if (!student) {
        alert("Not found");
        return;
    }

    currentStudent = student;
    displayInfo();
}

function displayInfo() {
    document.getElementById("info").innerHTML = `Hi ${currentStudent.name}, your current balance is: ${currentStudent.mealCard.balance} points.`;
}

function makePurchase() {
    if(!currentStudent){
        alert("Please select a student first.")
        return; //terminate
    }
    let balance_before_purchase = currentStudent.mealCard.balance;
    for (let item of shoppingCart) {
        try {
            currentStudent.buyFoodItem(item);
        } catch (e) {
            if (e instanceof ApplicationError) {
                alert("Insufficient balance");
                currentStudent.mealCard.balance = balance_before_purchase;
                return;
            }
        }
    }

    alert(`Thanks for the purchase, your remaining balance is ${currentStudent.mealCard.balance}`)
    displayInfo();
    resetShoppingCart();
}

function resetShoppingCart(){
    let table = document.getElementById('shopping_cart');
    let rows = document.querySelectorAll('#shopping_cart>tr')
    for(let i=rows.length; i>0; i--){
        table.deleteRow(i);
    }
    shoppingCart=[];
}