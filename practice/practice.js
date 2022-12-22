//! The Average will equal the sum dived by the total items you are adding together  (avg = sum / totalNumItems)
for (let nameLength of names) {
  let nameSplit = nameLength.split("");
  console.log(
    "The length of the names in the array",
    nameSplit.length,
    "Total char in names",
    nameSplit
  );
  nameLengthTotal += nameSplit.length;
  console.log(nameLengthTotal);
}

let avgSum = nameLengthTotal / names.length;
console.log(avgSum);
