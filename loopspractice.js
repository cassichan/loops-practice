//Multiplication table

for (let i = 1; i <= 10; i++) {
  let wholeRow = "";
  for (let j = 1; j <= 10; j++) {
    wholeRow += " " + i * j;
  }
  console.log(wholeRow); // put each row together
}

//One row
let i = 6;
let row = "";
for (let j = 1; j <= 10; j++) {
  row += " " + i * j;
}
console.log(row);
//Outputs row 6 of table - 6, 12, 18, 24, etc.
