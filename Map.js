// Map function
// It is basically used to transform a array. The map() method creates a new array with the results of calling a function for every array element

const arr = [5, 1, 3, 2, 6];
// Task 1: Double the array element: [10, 2, 6, 4, 12]
function double(x) {
 return x * 2;
}
const doubleArr = arr.map(double); // Internally map will run double function for each element of array and create a new array and returns it.
console.log(doubleArr); // [10, 2, 6, 4, 12]

// Task 2: Triple the array element
const arr1 = [5, 1, 3, 2, 6];
// Transformation logic
function triple(x) {
 return x * 3;
}
const tripleArr = arr1.map(triple);
console.log(tripleArr); // [15, 3, 9, 6, 18]

// Task 3: Convert array elements to binary
const arr3 = [5, 1, 3, 2, 6];
// Transformation logic:
function binary(x) {
return x.toString(2);
}
const binaryArr1 = arr3.map(binary);
// The above code can be rewritten as :
const binaryArr2 = arr3.map(function binary(x) {
return x.toString(2);
})
// OR -> Arrow function
const binaryArr3 = arr3.map((x) => x.toString(2));

//So basically map function is mapping each and every value and transforming it based on given condition.
const users = [
    { firstName: "Alok", lastName: "Raj", age: 23 },
    { firstName: "Ashish", lastName: "Kumar", age: 29 },
    { firstName: "Ankit", lastName: "Roy", age: 29 },
    { firstName: "Pranav", lastName: "Mukherjee", age: 50 },
  ];
  // Get array of full name : ["Alok Raj", "Ashish Kumar", ...]
  const fullNameArr = users.map((user) => user.firstName + " " + user.lastName);
  console.log(fullNameArr); // ["Alok Raj", "Ashish Kumar", ...]
  

