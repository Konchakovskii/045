'use strict';

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`Hello, my name is ${this.name}, I am ${this.id}!`);
    }
}

User.prototype.exit = function() {
    console.log(`User ${this.name} left`);
}

const igor = new User('Igor', 33);
const alex = new User('Alex', 20);


console.log(igor);
console.log(alex);

igor.hello();
alex.hello();

igor.exit();
alex.exit();