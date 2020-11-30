interface bankAccount {
  money: number;
  deposit: (value: number) => number;
  //checking(balance:number):number
}
interface myself {
  name: string;
  hobbies: string[];
}
class summery implements bankAccount, myself {
  money: number = 2000;
  name: string = "prof asaad"
  hobbies: string[] = ["voiline ", "developemnt"];
  constructor() {
    // this.name=name;
  }
  deposit(value: number) {
    console.log(`i am ${this.name} i love to spent my time with ${this.hobbies} and i have `)
    return this.money + value;
  }
}

let obj = new summery()
console.log(obj.deposit(2300))