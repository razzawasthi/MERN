// 1. Find Even Numbers
let arr1 = [1,2,3,4,5,6,7,8,9];
let even = [];
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] % 2 === 0) {
        even.push(arr1[i]);
    }
}
console.log(even);

// 2. Find Odd Numbers
let arr2 = [10,15,20,25,30];
let odd = [];
for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] % 2 !== 0) {
        odd.push(arr2[i]);
    }
}
console.log(odd);

// 3. Sum of Array Elements
let arr3 = [5,10,15];
let sum = 0;
for (let i = 0; i < arr3.length; i++) {
    sum += arr3[i];
}
console.log(sum);

// 4. Find Maximum Value
let arr4 = [3,5,7,2,8];
let max = arr4[0];
for (let i = 1; i < arr4.length; i++) {
    if (arr4[i] > max) {
        max = arr4[i];
    }
}
console.log(max);

// 5. Find Minimum Value
let arr5 = [12,4,6,9,1];
let min = arr5[0];
for (let i = 1; i < arr5.length; i++) {
    if (arr5[i] < min) {
        min = arr5[i];
    }
}
console.log(min);

// 6. Count Array Elements
let arr6 = [8,3,7,5];
let count = arr6.length;
console.log(count);

// 7. Multiply Array Elements
let arr7 = [2,3,4];
let product = 1;
for (let i = 0; i < arr7.length; i++) {
    product *= arr7[i];
}
console.log(product);

// 8. Check for Specific Number
let arr8 = [5,6,7,8];
let found = false;
for (let i = 0; i < arr8.length; i++) {
    if (arr8[i] === 7) {
        found = true;
        break;
    }
}
console.log(found ? "Found" : "Not Found");

// 9. Remove Duplicates
let arr9 = [1,2,2,3,4,4,5];
let unique = [];
for (let i = 0; i < arr9.length; i++) {
    if (!unique.includes(arr9[i])) {
        unique.push(arr9[i]);
    }
}
console.log(unique);

// 10. Squares of Elements
let arr10 = [1,2,3];
let square = [];
for (let i = 0; i < arr10.length; i++) {
    square.push(arr10[i] * arr10[i]);
}
console.log(square);

// 11. Numbers Greater than 10
let arr11 = [5,12,7,14,3];
let greater = [];
for (let i = 0; i < arr11.length; i++) {
    if (arr11[i] > 10) {
        greater.push(arr11[i]);
    }
}
console.log(greater);

// 12. Combine Two Arrays
let a = [1,2,3];
let b = [4,5,6];
let combined = a.concat(b);
console.log(combined);

// 13. Find Array Length
let arr13 = [9,7,5,3,1];
console.log(arr13.length);

// 14. Find Average Value
let arr14 = [10,20,30];
let total = 0;
for (let i = 0; i < arr14.length; i++) {
    total += arr14[i];
}
let average = total / arr14.length;
console.log(average);

// 15. Reverse an Array
let arr15 = [1,2,3,4,5];
let reversed = [];
for (let i = arr15.length - 1; i >= 0; i--) {
    reversed.push(arr15[i]);
}
console.log(reversed);

// 16. Find Common Elements
let arr16a = [1,2,3];
let arr16b = [2,3,4];
let common = [];
for (let i = 0; i < arr16a.length; i++) {
    if (arr16b.includes(arr16a[i])) {
        common.push(arr16a[i]);
    }
}
console.log(common);

// 17. Split Array into Two
let arr17 = [1,2,3,4,5];
let mid = Math.ceil(arr17.length / 2);
let firstHalf = arr17.slice(0, mid);
let secondHalf = arr17.slice(mid);
console.log(firstHalf, secondHalf);

// 18. Find Index of Element
let arr18 = [10,20,5,30];
let index = arr18.indexOf(5);
console.log(index);

// 19. Check if Array Contains Number
let arr19 = [2,4,6,8];
let exists = false;
for (let i = 0; i < arr19.length; i++) {
    if (arr19[i] === 4) {
        exists = true;
        break;
    }
}
console.log(exists ? "Yes" : "No");

// 20. String Lengths
let arr20 = ["apple","banana","cherry"];
let lengths = [];
for (let i = 0; i < arr20.length; i++) {
    lengths.push(arr20[i].length);
}
console.log(lengths);
