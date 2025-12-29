// 1. Age Check: Write an `if-else` statement to check if a person is 18 years old or older. Print "Adult" if 
// true, otherwise "Not an adult." 
let age=18;
if(age>=30){
    console.log("Adult");
}
else{
    console.log("Older");
}
//2. Number Sign: Write an `if-else` statement to check if a number is positive. Print "Positive" if true, 
//otherwise "Not positive." 
let number=10;
if(number >-3){
    console.log("positive number");
}
else{
    console.log("negative number");
}
// 3. Even or Odd: Write an `if-else` statement to check if a number is even. Print "Even" if true, otherwise 
//"Odd." 
let num=10;
if(num%2==0){
    console.log("Even number");
}
else{
    console.log("Negative number");
}
// 4. Vowel or Consonant: Write an `if-else` statement to check if a given character is a vowel. Print "Vowel" 
//if true, otherwise "Consonant."

let ch = 'a';

if (
  ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u' ||
  ch === 'A' || ch === 'E' || ch === 'I' || ch === 'O' || ch === 'U'
) {
  console.log("Vowel");
} else {
  console.log("Consonant");
}

//5. Check Zero: Write an `if-else` statement to check if a number is zero. Print "Zero" if true, otherwise 
//"Non-zero." 
let numb=0;
if(numb===0){
    console.log("Zero");
}
else{
    console.log("Non-Zero");
}
//6. Multiple of Five: Write an `if-else` statement to check if a number is a multiple of 5. Print "Multiple of 
//5" if true, otherwise "Not a multiple of 5."
let numbe=20;
if(numb%5===0){
    console.log("Multiple of 5");
}
else{
    console.log("Not multiple of 5");
}
//6. Multiple of Five: Write an `if-else` statement to check if a number is a multiple of 5. Print "Multiple of 
//5" if true, otherwise "Not a multiple of 5."
let nub=10;
if(nub<=20){
    console.log("Greater then 10");
}
else{
    console.log("Less then 10");
}
//8. Check Equality: Write an `if-else` statement to check if two numbers are equal. Print "Equal" if true, 
//otherwise "Not equal."
let a=10
let b=10
if(a===b){
    console.log("number are equal");
}
else{
    console.log("Not equal");
}
//9. String Length Check: Write an `if-else` statement to check if the length of a string is greater than 5. 
//Print "Long string" if true, otherwise "Short string."
 let str="helloworld";
 if(str.length>5){
    console.log("Long string");
 }
 else{
    console.log("Short string");
 }
 //10. Check Uppercase: Write an `if-else` statement to check if a character is uppercase. Print "Uppercase" 
//if true, otherwise "Lowercase."
let chr='A';
if(chr>='A' && chr<='Z'){
    console.log("UperCase");
}
else{
    console.log("LowerCase");
}

//
let day = "Saturday";

if (day === "Saturday") {
  console.log("Weekend");
} else {
  console.log("Not weekend");
}

//12. Age Category: Write an `if-else` statement to check if a person is a child (under 12). Print "Child" if 
//true, otherwise "Not a child."
let ag=12;
if(ag>4){
    console.log("Child");
}
else{
    console.log("not child");
}
//
let temp=30
if(temp<=40){
    console.log("hot");
}
else{
    console.log("cold");
}
//
let c=100
if(c>=1 && c<=100){
    console.log("In-Range");
}
else{
    console.log("Out of Range");
}


//
let t=30
if(t%3==0){
    console.log("Divisible by 3");
}
else{
    console.log("not divisible by 3");
}

//
let hour = 10; 

if (hour < 12) {
  console.log("Morning");
} else {
  console.log("Afternoon");
}

// 15. Grade Check: Write an if-else statement to check if a student’s score is >= 50.
let score = 65;

if (score >= 50) {
  console.log("Pass");
} else {
  console.log("Fail");
}

// 16. Divisibility Check: Check if a number is divisible by 3.
let num1 = 9;

if (num1 % 3 === 0) {
  console.log("Divisible by 3");
} else {
  console.log("Not divisible by 3");
}

// 17. Morning or Afternoon: Check if the time is before 12 PM.
let hours = 10; // 24-hour format

if (hours < 12) {
  console.log("Morning");
} else {
  console.log("Afternoon");
}

// 18. Teenager Check: Check if age is between 13 and 19.
let ages = 16;

if (ages >= 13 && ages <= 19) {
  console.log("Teenager");
} else {
  console.log("Not a teenager");
}

// 19. String Content Check: Check if a string contains the letter "a".
let text = "JavaScript";

if (text.includes("a")) {
  console.log("Contains 'a'");
} else {
  console.log("Does not contain 'a'");
}

// 20. Leap Year Check: Check if a given year is a leap year.
let year = 2024;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log("Leap year");
} else {
  console.log("Not a leap year");
}

// 21. Check Negative: Check if a number is negative.
let num2 = -5;

if (num2 < 0) {
  console.log("Negative");
} else {
  console.log("Positive or zero");
}

// 22. Password Match: Check if user input matches the password "1234".
let password = "1234";
let userInput = "1234";

if (userInput === password) {
  console.log("Access granted");
} else {
  console.log("Access denied");
}

// 23. Greater Number: Check if the first number is greater than the second.
let x = 20;
let y = 15;

if (a > b) {
  console.log("First is greater");
} else {
  console.log("Second is greater or equal");
}

// 24. Prime Check: Check if a number is prime.
let numbers = 7;
let isPrime = true;

if (numbers <= 1) {
  isPrime = false;
} else {
  for (let i = 2; i <= Math.sqrt(numbers); i++) {
    if (numbers % i === 0) {
      isPrime = false;
      break;
    }
  }
}

if (isPrime) {
  console.log("Prime");
} else {
  console.log("Not prime");
}
