/*eslint-disable*/
let bankAccount = { 
	money: 2000, 
	deposit(value) { 
		this.money += value; 
	} 
}; 
let myself = { 
	name: "Asaad", 
	bankAccount: bankAccount, 
	hobbies: ["Violin", "Cooking"] 
}; 

myself.bankAccount.deposit(3000); 
console.log(myself);