//Write a function that logs even numbers from 0-100

const logEvenNumbers = () => {
  for (let i = 0; i <= 100; i += 2) {
    console.log(i);
  }
};

logEvenNumbers();

//Write a function that counts down from ten and says "blast off" at 0
function countDown() {
  for (let i = 10; i >= 0; i--) {
    if (i === 0) {
      console.log("blast off");
    } else {
      console.log(i);
    }
  }
}

countDown();

//Write a function that loops through an array of numbers and returns the total sum of the array

let sum = 0;
let myArrayOfNumbers = [12, 5, 40, 75, 24];

function sumTheArray(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    sum = sum + arr[i];
  }
  console.log(sum);
}

sumTheArray(myArrayOfNumbers);

// LAB 1 - Loops
// Create an array of names of your classmates
// Create a for loop that goes through the array and logs each name in the array

// EXAMPLE
// Array: const names = ['Jimmy', 'Frank', 'Ben']
// Output should be:
// Jimmy// Frank// Ben// Ben// Frank// Jimmy

const myClassmates = ["Verra", "Renzo", "Jessica", "Maria"];
for (i = 0; i < myClassmates.length; i++) {
  console.log(myClassmates[i]);
}

// Now create another for loop that goes through the array in REVERSE and logs each name
for (i = myClassmates.length - 1; i >= 0; i--) {
  console.log(myClassmates[i]);
}

// use a for loop to print a half pyramid of *
// Example output:
// *
// **
// ***
// ****
// *****

let pyramid = "";
for (let i = 0; i < 5; i++) {
  pyramid = pyramid + "*";
  console.log(pyramid);
}
