// for (key in object) {
//     statement;
// }

// const obj = {a: 1, b: 2, c: 3};
// for (const key in obj) { ---> can also use "let key"
//     console.log(key);
// }

//iterates over properties of object
// key- property of the object
// statement code is executed while condition is true

const object = {
    name: "Cass",
    age: 30,
    isInClass: true,
};

// for (const key in object) {
//     console.log(key);
// } //outputs just the key/property names


// for (const key in object) {
// //     console.log(object[key]);
// }  outputs the values of the key:value pair (property) for the object