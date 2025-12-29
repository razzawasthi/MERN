// 1. Filter out even numbers
const numbers1 = [1, 2, 3, 4, 5, 6];
const filteredOutEvens = numbers1.filter(num => num % 2 !== 0);
console.log(filteredOutEvens); // [1, 3, 5]

// 2. Include only odd numbers
const numbers2 = [10, 15, 20, 25];
const onlyOddNumbers = numbers2.filter(num => num % 2 !== 0);
console.log(onlyOddNumbers); // [15, 25]

// 3. Filter out strings with more than 3 characters
const words3 = ["apple", "cat", "dog", "banana"];
const shortWords = words3.filter(str => str.length <= 3);
console.log(shortWords); // ["cat", "dog"]

// 4. Filter out negative numbers
const numbers4 = [-5, -2, 0, 3, 8];
const positiveOnly = numbers4.filter(num => num >= 0);
console.log(positiveOnly); // [0, 3, 8]

// 5. Filter out 'true' values
const bools5 = [true, false, true, false];
const onlyFalse = bools5.filter(val => val !== true);
console.log(onlyFalse); // [false, false]

// 6. Include strings containing the letter 'a'
const words6 = ["apple", "berry", "cherry", "date"];
const containsA = words6.filter(str => str.includes('a'));
console.log(containsA); // ["apple", "date"]

// 7. Numbers greater than 5
const numbers7 = [2, 5, 8, 1, 12];
const overFive = numbers7.filter(num => num > 5);
console.log(overFive); // [8, 12]

// 8. Filter out empty strings
const words8 = ["hello", "", "world", " "];
const nonEmpty = words8.filter(str => str !== "");
console.log(nonEmpty); // ["hello", "world", " "]
// 9. Double each number
const numbers9 = [1, 2, 3];
const doubled = numbers9.map(num => num * 2);
console.log(doubled); // [2, 4, 6]

// 10. Numbers to Strings
const numbers10 = [1, 2, 3];
const stringified = numbers10.map(num => String(num));
console.log(stringified); // ["1", "2", "3"]

// 11. Uppercase strings
const words11 = ["hello", "world"];
const loudWords = words11.map(str => str.toUpperCase());
console.log(loudWords); // ["HELLO", "WORLD"]

// 12. Map to Booleans (True if positive)
const numbers12 = [10, -5, 2, -1];
const statusBools = numbers12.map(num => num >= 0);
console.log(statusBools); // [true, false, true, false]

// 13. Add 1 to each number
const numbers13 = [10, 20, 30];
const incremented = numbers13.map(num => num + 1);
console.log(incremented); // [11, 21, 31]

// 14. First letter of each string
const words14 = ["Apple", "Banana", "Cherry"];
const initials = words14.map(str => str[0]);
console.log(initials); // ["A", "B", "C"]

// 15. Array of string lengths
const words15 = ["hi", "hello", "hippo"];
const lengths = words15.map(str => str.length);
console.log(lengths); // [2, 5, 5]

// 16. Square each number
const numbers16 = [2, 3, 4];
const squared = numbers16.map(num => num * num);
console.log(squared); // [4, 9, 16]