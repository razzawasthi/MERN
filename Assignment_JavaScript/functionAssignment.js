// 1. Print numbers from 1 to 10
function print1to10() {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}

// 2. Return sum of first n natural numbers
function sumOfN(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumOfN(30));

// 3. Print all even numbers between 1 and 20
function printEven1to20() {
  for (let i = 2; i <= 20; i += 2) {
    console.log(i);
  }
}
printEven1to20()

// 4. Print all odd numbers between 1 and 20
function printOdd1to20() {
  for (let i = 1; i <= 20; i += 2) {
    console.log(i);
  }
}
printOdd1to20()

// 5. Return factorial of a given number
function factorial(n) {
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact *= i;
  }
  return fact;
}

// 6. Print multiplication table of 5
function tableOf5() {
  for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
  }
}

// 7. Print numbers from 10 to 1
function print10to1() {
  for (let i = 10; i >= 1; i--) {
    console.log(i);
  }
}

// 8. Print multiples of 3 between 1 and 30
function multiplesOf3() {
  for (let i = 3; i <= 30; i += 3) {
    console.log(i);
  }
}

// 9. Return sum of all even numbers between 1 and 50
function sumEven1to50() {
  let sum = 0;
  for (let i = 2; i <= 50; i += 2) {
    sum += i;
  }
  return sum;
}

// 10. Return sum of all odd numbers between 1 and 50
function sumOdd1to50() {
  let sum = 0;
  for (let i = 1; i <= 50; i += 2) {
    sum += i;
  }
  return sum;
}

// 11. Print numbers between 1 and 100 divisible by 5
function divisibleBy5() {
  for (let i = 5; i <= 100; i += 5) {
    console.log(i);
  }
}

// 12. Print first 10 Fibonacci numbers
function fibonacci10() {
  let a = 0, b = 1;
  for (let i = 1; i <= 10; i++) {
    console.log(a);
    let next = a + b;
    a = b;
    b = next;
  }
}

// 13. Count number of digits in a positive integer
function countDigits(num) {
  let count = 0;
  for (; num > 0; num = Math.floor(num / 10)) {
    count++;
  }
  return count;
}

// 14. Print square of numbers from 1 to 10
function square1to10() {
  for (let i = 1; i <= 10; i++) {
    console.log(i * i);
  }
}

// 15. Return sum of squares of first n natural numbers
function sumOfSquares(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i * i;
  }
  return sum;
}

// 16. Print cube of numbers from 1 to 10
function cube1to10() {
  for (let i = 1; i <= 10; i++) {
    console.log(i * i * i);
  }
}

// 17. Return smallest number > 0 divisible by both 3 and 4
function smallestDivBy3And4() {
  for (let i = 1; ; i++) {
    if (i % 3 === 0 && i % 4 === 0) {
      return i;
    }
  }
}

// 18. Print first 10 even numbers
function first10Even() {
  for (let i = 1; i <= 10; i++) {
    console.log(i * 2);
  }
}

// 19. Print numbers from 1 to 100 divisible by both 2 and 5
function divisibleBy2And5() {
  for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0 && i % 5 === 0) {
      console.log(i);
    }
  }
}

// 20. Return sum of all multiples of 3 or 5 below 100
function sumMultiples3or5() {
  let sum = 0;
  for (let i = 1; i < 100; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}
