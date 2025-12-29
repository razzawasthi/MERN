// 1. Add number 7 at the end of the array using push
function addSeven() {
  let arr = [1, 2, 3, 4];
  arr.push(7);
  return arr;
}

// 2. Remove the last element using pop
function removeLastFruit() {
  let arr = ["apple", "banana"];
  arr.pop();
  return arr;
}

// 3. Remove the first element using shift
function removeFirstElement() {
  let arr = [10, 20, 30, 40];
  arr.shift();
  return arr;
}

// 4. Add element "start" at the beginning using unshift
function addAtBeginning() {
  let arr = ["middle", "end"];
  arr.unshift("start");
  return arr;
}

// 5. Convert array to string using toString
function arrayToString() {
  let arr = ["one", "two", "three"];
  return arr.toString();
}

// 6. Combine two arrays using concat
function combineArrays() {
  let arr1 = ["cat", "dog"];
  let arr2 = ["fish", "bird"];
  return arr1.concat(arr2);
}

// 7. Extract first two elements using slice
function extractFirstTwo() {
  let arr = ["red", "green", "blue"];
  return arr.slice(0, 2);
}

// 8. Remove last element and add "a" at beginning
function modifyArray() {
  let arr = ["x", "y", "z"];
  arr.pop();
  arr.unshift("a");
  return arr;
}

// 9. Convert array to string and find its length
function stringLength() {
  let arr = [100, 200, 300];
  let str = arr.toString();
  return str.length;
}

// 10. Add "orange" and "grape" using push
function addFruits() {
  let arr = ["apple", "banana"];
  arr.push("orange", "grape");
  return arr;
}

// 11. Remove first element using shift
function removeFirstCelestial() {
  let arr = ["sun", "moon", "stars"];
  arr.shift();
  return arr;
}

// 12. Add number 42 at beginning using unshift
function addNumberAtBeginning() {
  let arr = [7, 14, 21];
  arr.unshift(42);
  return arr;
}

// 13. Remove last element and store it in a variable
function popAndStore() {
  let arr = [5, 10, 15, 20];
  let removedValue = arr.pop();
  return removedValue;
}

// 14. Convert array to string and split back into array
function convertAndSplit() {
  let arr = ["hello", "world"];
  let str = arr.toString();
  return str.split(",");
}

console.log("1:", addSeven());
console.log("2:", removeLastFruit());
console.log("3:", removeFirstElement());
console.log("4:", addAtBeginning());
console.log("5:", arrayToString());
console.log("6:", combineArrays());
console.log("7:", extractFirstTwo());
console.log("8:", modifyArray());
console.log("9:", stringLength());
console.log("10:", addFruits());
console.log("11:", removeFirstCelestial());
console.log("12:", addNumberAtBeginning());
console.log("13:", popAndStore());
console.log("14:", convertAndSplit());
