//! 1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.

let ages = [3, 9, 23, 64, 2, 8, 28, 93]; // declares a variable equal to an array of age.
console.log("1. this is the array before any changes", ages);

//! 1a. Programmatically subtract the value of the first element in the array from the value in the last element of the array

let lastArr = ages.pop(); // removes the last element in an array & returns the removed amount
let firstArr = ages.shift(); // removes the first element in an array & returns the removed amount

console.log("1a. subtracts last from first", firstArr - lastArr); // subtract the firstArr variable from the lastArr variable to get the answer -- 90

//! 1b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
ages.push(99); // pushes the number 99 to the end of the ages array
console.log("1b. Added a new age", ages);

//! 1c. Use a loop to iterate through the array and calculate the average age.
let ageTotal = 0; // Declares a variable that will allow the total of ages to be added

// we then use a for of loop to iterate over an array of ages
for (let age of ages) {
  ageTotal += age; // Each age is being added to the ageTotal variable
  //?   console.log("Age Total variable", ageTotal);
}
let average = ageTotal / ages.length; // the avarages variable is equal to i divided by the length of the ages array.
console.log("1c. This is the average age:", average);

//! 2. Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"]; // Creates an array with a variable called names

console.log("2. Shows the names in the array", names);

//! 2a. Use a loop to iterate through the array and calculate the average number of letters per name.

//TODO:  Declares a variable that will allow the length of names in the array to be added.
let nameLengthTotal = 0;

//created a for loop that iterates over the names array
for (let i = 0; i < names.length; i++) {
  //? console.log("index", i, " Name:", names[i], " Name Length:", names[i].length);
  nameLengthTotal += names[i].length; //the length of each specific element in the array is added to the nameLengthTotal variable.
  //? console.log("This is the name length total", nameLengthTotal);
}
//TODO: calculate the average number of letters in the name
let averageSum = nameLengthTotal / names.length; //averageSum is the nameLenthTotal variable divided by the total number of elements in the array.

console.log("2a. This Is The Sum Average", averageSum);

//! 2b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.

let nameContain = ""; // Declares a variable equal to an empty string

//sets a for loops that iterates over the names array
for (let i = 0; i < names.length; i++) {
  //?   console.log("index:", i);
  //TODO: iterate through the array again
  //?   console.log("itrates through array: ", names[i]);

  //TODO: concat all of the names, separated by spaces

  nameContain += names[i] + " "; // takes the nameContain variable and adds a blank space between each element in the names array, concatanated as a string.
  //? console.log(nameContain);
}
console.log("2b This is the contacted names:", nameContain);

//! 3. How do you access the last element of any array?

// take the names array, and
console.log(
  "3. Here is the original names array:",
  names,
  "Last Element in the array:",
  names[names.length - 1] // Takes the length of the names array minus 1, to output the last element of the array, as it's 0 based.
);
//! 4. How do you access the first element of any array?

console.log("4. This is the first element in the array:", names[0]); // outputs the first value in the array, as it's 0 based.

//! 5.

/*
//Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
//For example:

//namesArray = ["Kelly", "Sam", "Kate"] //given this array
//nameLengths = [5, 3, 4] //create this new array
*/

//TODO: Create a new array called nameLengths.

let nameLengths = []; // created a new variable to house the new array and to show the length of names in the array

//TODO: Write a loop to iterate over the previously created names array
//created a for loop that will iterate as the index is less than the length of the array.
for (i = 0; i < names.length; i++) {
  //console.log("index:", i);
  //TODO: add the length of each name to the nameLengths array.
  nameLengths.push(names[i].length); // pushes the length of each element in the names array, to the namesLength variable
  //?   console.log("length of names:", nameLengths);
}
console.log("5. This is the length of the names array:", nameLengths);

//! 6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.

//Declares a variable called sumContainer that we will use to add to the number of items within the array.
let sumContainer = 0;
// Used a for of loop to declare the nameLength, of each element in the array
for (let nameLength of nameLengths) {
  sumContainer += nameLength;
}
console.log("6.", sumContainer);

//! 7.

/*
Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to 
itself n number of times. (i.e. if I pass in ‘Hello’ and 3, 
I would expect the function to return ‘HelloHelloHello’).
*/

//TODO Write a function that takes two parameters

//TODO returns the word concatenated to itself n number of times
//Created a function that passes 2 paramaters
function myFunction(word, n) {
  let wordContainer = "";
  for (let i = 0; i < n; i++) {
    //if index is less an n, we iterate index
    wordContainer += word; // we use the addition assignment operator to add the word paramater to the word container after each iteration
  }
  console.log("7.", wordContainer);
  return wordContainer;
}
myFunction("Hello", 3);

//! 8

/*
Write a function that takes two parameters, firstName and lastName, and returns a full name.
The full name should be the first and the last name separated by a space.
*/

let fullName = "";
// Declares a function that passes 2 paramaters
function myName(firstName, lastName) {
  fullName = firstName + " " + lastName; //uses a fullName variable that passes the first name, a space, and the last name/
  //console.log(fullName);
  console.log("8.", fullName);
  return fullName;
}

myName("Daniel", "Cox");

//! 9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

const arrayOfNumbers = [25, 36, 37, 55, 88, 92];
function sumNumbersArray(numbersArray) {
  let total = 0;
  // uses a for loop to iterate if index is less than the numberArray length
  for (let i = 0; i < numbersArray.length; i++) {
    total += arrayOfNumbers[i]; // each time we will add the arrayofNumbers index to the total
  }
  if (total > 100) {
    // if the total is great than 100 we return true, otherwise we will return false.
    console.log("9. True", total);
    return true;
  } else {
    console.log("Your number is too low!");
    return false;
  }
}
sumNumbersArray(arrayOfNumbers);

//! 10. Write a function that takes an array of numbers and returns the average of all the elements in the array.

function numbers() {
  let arrayAverage = 0;
  for (let number of arrayOfNumbers) {
    // create a variable called number that iterates over each element in the array
    arrayAverage += number; // each number is the added to the array average
    //console.log(arrayAverage);
  }
  average = arrayAverage / arrayOfNumbers.length; // the avarages variable is equal to i divided by the length of the ages array.
  console.log("10. This is the average of the numbers:", average);
}
numbers();

//! 11.

/* 
Write a function that takes two arrays of numbers and returns true if the average of the element
in the first array is greater than the average of the elements in the second array.
*/

let array1 = [1, 22, 33, 99];
let array2 = [4, 15, 26, 47];

//TODO Write a function that takes two arrays of numbers
function array(arrayParam1, arrayParam2) {
  // create a function that takes 2 parameters
  let sumArray1 = 0; // declares a variable to equal 0;
  for (let number of arrayParam1) {
    // console.log("test", number, arrayParam1);
    sumArray1 += number; // add sumArray1 to the number itiration variable
  }
  let arrAverage1 = sumArray1 / arrayParam1.length; // sets the arrAveage equal to  sumArray1 / the length of the aveargeOfArray1 variable
  //console.log("11. ", arrAverage1);

  let sumArray2 = 0; // declares a variable to equal 0;
  for (let number of arrayParam2) {
    // declares a variable called number for each element of the array and itirates through them.
    sumArray2 += number;
  }

  // This does the same as the above for loops, just with a different variable.
  let arrAverage2 = sumArray2 / arrayParam2.length;
  //console.log("11. ", arrAverage2);

  if (arrAverage1 > arrAverage2) {
    console.log("11", true, arrAverage1, arrAverage2);
    return true;
  } else {
    console.log("11", false, arrAverage1, arrAverage2);
    return false;
  }
}
array(array1, array2);

//! 12.

/* 
Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket,
 and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
*/

function willBuyDrink(isHotOutside, moneyInPocket) {
  // Declares a function that passes 2 variables
  if (isHotOutside === true && moneyInPocket === 10.5) {
    // if hot outside is true AND money in pocket = 10.50 the console log 'isHotOutside = true is passed
    console.log("12", isHotOutside);
    return true;
  }
}

willBuyDrink(true, 10.5);

//! 13. Create a function of your own that solves a problem.

function parkingSpots(availableSpots, spotsTaken) {
  // Declares a function that looks for 2 variables
  let totalSpotsRemaining = (availableSpots -= spotsTaken); //subtracts the number of available spots from the number taken, and passes that data through a variable called totalSpotsRemaining

  if (totalSpotsRemaining > 0) {
    // if the number of spots taken are greater than 0, we pass the console log saying there are spots available
    console.log(
      "13. ",
      "There are",
      totalSpotsRemaining,
      "parking spots remaining."
    );
  } else console.log("There are no parking spots available!"); // otherwise we say there are no spots available.
}
parkingSpots(50, 50); //This calls the function and passes in the paramaters for the 2 variables that were originally created for this function.
