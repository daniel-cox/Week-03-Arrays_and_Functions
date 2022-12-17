//Notice that the following four examples are very similar, with the third and fourth examples actually setting the values within the array in the declaration.  All four declare an array named gradesArray, all four tell JavaScript that we are creating an array (e.g. new Array() or []), and all four tell JavaScript to create enough space for 5 elements.

let gradesArray = [5];
let gradesArray = new Array(5);
let gradesArray = [100, 79, 80, 90, 100];
let gradesArray = new Array(100, 79, 80, 90, 100);

//Additionally, you can also create an array without a length like one of these two options:

let gradesArray = [];
let gradesArray = new Array();
//And push values to that array by doing the following:

gradesArray.push(100);
gradesArray.push(79);
gradesArray.push(80);
gradesArray.push(90);
gradesArray.push(100);

//Grade Book Array Example:

//1. Let's simplify the Grade Book Example now by using an array, and a for loop to print the grades:

let fullName = "Mary" + " " + "Brown";
let gradesArray = [100, 79, 80, 90, 100];

console.log("\n\nStudent: " + fullName);
console.log("Grades: ");
for (let i = 0; i < 5; i++) {
  console.log(i + 1 + ": " + gradesArray[i]);
}

//2. Check out this rewrite of our Grade Book Array Example, using an enhanced for loop to print the grades:

let fullName = "Mary" + " " + "Brown";
let gradesArray = [100, 79, 80, 90, 100];
let counter = 1;

console.log("\n\nStudent: " + fullName);
console.log("Grades: ");
for (let grade of gradesArray) {
  console.log(counter++ + ": " + grade);
}

//3. Arrays in JavaScript can have elements added to them.   Here we add one more grade to an array by using arrayName.push()   Check out one more Grade Book Array Example rewrite:

let fullName = "Mary" + " " + "Brown";
let gradesArray = [100, 79, 80, 90, 100];
let counter = 1;

console.log("\n\nStudent: " + fullName);
console.log("Grades: ");
for (let grade of gradesArray) {
  console.log(counter++ + ": " + grade);
}

// Now Add Another Grade
gradesArray.push(85);
// Reset the counter to 1;
counter = 1;
console.log("\n\nStudent: " + fullName);
console.log("Grades: ");
for (let grade of gradesArray) {
  console.log(counter++ + ": " + grade);
}
