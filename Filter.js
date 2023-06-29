// Filter function

// Filter function is basically used to filter the value inside an array. The arr.filter() method is used to create a new array from a given array consisting of only those elements from the given array which satisfy a condition set by the argument method.

const array = [5, 1, 3, 2, 6];
// filter odd values
function isOdd(x) {
 return x % 2;
}
const oddArr = array.filter(isOdd); // [5,1,3]
// Other way of writing the above:
const oddArr1 = arr.filter((x) => x % 2);