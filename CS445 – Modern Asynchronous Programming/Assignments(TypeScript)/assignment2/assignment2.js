/*eslint-disable*/

var summery = /** @class */ (function () {
    function summery() {
        this.money = 2000;
        this.name = "prof asaad";
        this.hobbies = ["voiline ", "developemnt"];
        // this.name=name;
    }
    summery.prototype.deposit = function (value) {
        console.log("i am " + this.name + " i love to spent my time with " + this.hobbies + " and i have ");
        return this.money + value;
    };
    return summery;
}());
var obj = new summery();
console.log(obj.deposit(2300));
