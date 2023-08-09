"use strict";

// Create a class called `Person` with the following properties and methods:
// 1 - Properties:
//   `name` (string)
//   `age` (number)
// 2 - Methods:
//   `introduce()`: This method should return a string introducing the person, for example: "Hi, my name is John and I am 25 years old."

class Person {
  constructor(name, age) {
    this.name = String(name);
    this.age = Number(age);
  }
  introduce() {
    return `Hi, my name is ${this.name} and I am ${this.age} years old`;
  }
}

// Exercise 2 - This
// Create a new object using the `Person` class you defined in Exercise 1. Name the object `person1` and set the `name` and `age` properties accordingly. Then, create a function called `describePerson` that takes a callback function as an argument. Inside the `describePerson` function, call the callback function with `person1` as the `this` context.

const person1 = new Person("Mike", 28);

function describePerson(cb) {
  return cb();
}

// Exercise 3 - Promises
// Write a function called `wait` that takes a number as an argument (representing milliseconds) and returns a Promise. The Promise should resolve after the given number of milliseconds, using `setTimeout`. The resolved value can be anything you choose.

function wait(delay) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}

// Exercise 4 - Async/Await
// Create an async function called `getData` that uses the `wait` function from Task 3 to simulate an asynchronous operation. This function should use `await` to wait for the Promise to resolve and then return a string with the message "Data received."

async function getData() {
  await wait(1000);

  return "Data received";
}

// Exercise 5 - Putting it all together
// Call the `introduce()` method on `person1` created in Exercise 2 and log the result. Then, use the `describePerson` function to log the result of calling the `introduce()` method on `person1` but with `describePerson` as the `this` context. Finally, within an async function, call the `getData` function from Task 4 and log the result.

console.log(person1.introduce());

describePerson(
  function () {
    console.log(this.introduce());
  }.bind(person1)
);

async function displayData() {
  const data = await getData();
  console.log(data);
}
displayData();
