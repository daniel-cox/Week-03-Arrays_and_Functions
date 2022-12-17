// let num1 = 28;
// let text = "";
// for (let i = 24; i < 100; i++) {
//   if (i === 28) {
//     console.log("How many people will be over for dinner? " + num1);
//   } else {
//     if (i !== 28) console.log("You need to invite more people");
//   }
// }

// const gameObjects = ["rock", "paper", "scissors"];
// const joinNoSeparator = gameObjects.join();
// const joinWithSeparator = gameObjects.join(" + ");

// console.log("No separator: ", joinNoSeparator);
// console.log("With separator: ", joinWithSeparator);

//var a = "bLUe";

//write your code below

// function isBlue(colorName) {
//   let nameLower = colorName.toUpperCase();
//   console.log(nameLower);
//   //console.log('This is the color name before',colorName)
//   if (nameLower === "blue") {
//     // console.log('This is the color name after', colorName)
//     return true;
//   } else {
//     return false;
//   }
// }

// //do not change below, used for testing purposes
// console.log(isBlue(a));

// let button = document.querySelector("button");
// let box = document.getElementById("changeMe");

// button.onclick = function changeColor() {
//   if (box.style.background == "#BB0E0E") {
//     box.style.background = "#2680C2";
//   } else {
//     box.style.background = "#BB0E0E";
//   }
// };

var input = ["Jason", "David", "Michael"];
var staticArray = ["Henry", "Peter", "Julie"];

//write your code here

function joinArrays(arr1, arr2) {
  newArray = arr1.concat(arr2);

  return newArray;
}
// do not change
// for testing purposes
console.log(joinArrays(input, staticArray));
