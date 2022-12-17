let array1 = [1, 5, 6, 9, 10, 14];

// print the 3rd element in array1
console.log(array1[2]);
// print the last element in array1
console.log(array1.length);
// add 16 and 3 to array1
array1.push(16, 3);
console.log(array1);
// sort the array, then print the 3rd element again
// did it change?
array1.sort();
console.log(array1[2]);

// create a variable called myTodoList that holds an empty array
var myTodoList = [];
// add three todo items to the array using a built-in array method
myTodoList.push("clean the guitar", "change the strings", "Play a song");
console.log(myTodoList);
// remove the second item in the array
myTodoList.splice(1, 1);
console.log(myTodoList);
// create another array, yourTodoList, and add two todo items
var yourTodoList = ["Get ready for work", "Drive To Work"];
// create another array, ourTodoList
// combine myTodoList and yourTodoList into ourTodoList
var ourTodoList = [...myTodoList, ...yourTodoList];
console.log(ourTodoList);
// sort the following array from Z-A

// create a function called reverse that takes in parameter

// this function will return the opposite of whatever is passed in
// if its a boolean, return the opposite
// if its a number, or a string, return the reverse (i.e. 1234 becomes 4321, Name becomes emaN)
// if its an array, return the reversed array with each element reversed
let iName = "Daniel";

function reverse(testParam) {
  console.log(typeof iName);
  if (typeof testParam === "boolean") {
    return !testParam;
  } else if (typeof testParam === "string" || typeof testParam === "number") {
    console.log("inside statemeent", testParam);

    let spliti = testParam.split("").reverse().join();
    return spliti;
  }
}
console.log(reverse(iName));
// create a function called addingMachine that will add all passed numbers and return the total
// Note: you don't know how many numbers will be passed
// You just signed a contract as an estimator for a restoration company.

// create a function that will allow you to check how much of a bonus you make
// the function should take in two variables as arguments, grossInvoiced and profitMargin

function profitEstimator(grossInvoiced, profitMargin) {
  console.log(
    "This is the gross invoiced amount (gross)",
    grossInvoiced,
    "\nand this is the profit",
    profitMargin
  );
  if (profitMargin === 100000) {
    let bonus = grossInvoiced / 10; // sets bonus to the sum of profit divided by 10
    let bonusRounded = Math.round(bonus); // ensures the number is rounded to the nearest whole number
    console.log("Your bonnus is:", bonusRounded);

    // Your contract states that you take home 10% of the profits on the first $100,000
  } else if (profitMargin === 500000) {
    // profit is equal to 500000
    let bonus = grossInvoiced / 20; // sets bonus to the sum of profit divided by 20
    let bonusRounded = Math.round(bonus); // ensures the number is rounded to the nearest whole number
    console.log("Your bonnus is:", bonusRounded);
    // 20% on the next $400,000
  } else if (profitMargin === 900000) {
    let bonus = grossInvoiced / 35; // sets bonus to the sum of profit divided by 35
    let bonusRounded = Math.round(bonus); // ensures the number is rounded to the nearest whole number
    console.log("Your bonnus is:", bonusRounded);
    // 35% on the next $500,000
  } else if (profitMargin > 1000000) {
    let bonus = grossInvoiced / 40; // sets bonus to the sum of profit divided by 40
    let bonusRounded = Math.round(bonus); // ensures the number is rounded to the nearest whole number
    console.log("Your bonnus is:", bonusRounded);
    // 40% on all profits above $1,000,000
  } else {
    console.log("You do not get a bonus");
  }
}

// Created below variables to call to the function below
let gross = prompt("Enter Gross Here");
let margin = 500000;

//Calling the function
profitEstimator(gross, margin);
