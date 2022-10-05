//This is basic for loop
// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }

// for (let i = 0; i <= 10; i++) {
//     console.log("hi");
// }

// //Looping through array

const arr = [0, 4, 10, 400, 50];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

//Adding array into another variable using for loop
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum = sum + arr[i];
}
console.log(sum);

//Loop backwards/reverse through array
const secondArr = [5, 12, 200];
for (let i = secondArr.length - 1; i >= 0; i--) {
  //or stopping condition could be i > -1--means has a value 0 or higher.
  console.log(secondArr[i]);
}

//Looping in reverse
for (let i = 10; i >= 0; i--) {
  if (i === 0) {
    console.log("BLAST OFF!");
    return; //return to get out of the loop
  }
  console.log(i);
}
