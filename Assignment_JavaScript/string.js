
let str = "Hello EveryOne";

// 1. Count how many times 'e' appears
let countE = 0;
for (let i = 0; i < str.length; i++) {
  if (str[i] === 'e') countE++;
}
console.log("1.", countE);

// 2. Starts with 'H' and ends with 'e'
if (str[0] === 'H' && str[str.length - 1] === 'e') {
  console.log("2. Yes");
} else {
  console.log("2. No");
}

// 3. Print only uppercase letters
console.log("3.");
for (let i = 0; i < str.length; i++) {
  if (str[i] >= 'A' && str[i] <= 'Z') {
    console.log(str[i]);
  }
}

// 4. Replace "Hello" with "Hi"
let q4 = str.replace("Hello", "Hi");
console.log("4.", q4);

// 5. Count vowels
let vowelCount = 0;
for (let i = 0; i < str.length; i++) {
  if ("aeiouAEIOU".includes(str[i])) vowelCount++;
}
console.log("5.", vowelCount);

// 6. First letter of each word
let words = str.split(" ");
let firstLetters = "";
for (let i = 0; i < words.length; i++) {
  firstLetters += words[i][0];
}
console.log("6.", firstLetters);

// 7. Palindrome check
let s7 = "madam";
let rev7 = "";
for (let i = s7.length - 1; i >= 0; i--) {
  rev7 += s7[i];
}
console.log("7.", s7 === rev7 ? "Palindrome" : "Not Palindrome");

// 8. Trim spaces and check empty
let s8 = "   ";
s8 = s8.trim();
console.log("8.", s8 === "" ? "Empty" : "Not Empty");

// 9. Convert uppercase to lowercase and vice-versa
let q9 = "";
for (let i = 0; i < str.length; i++) {
  if (str[i] >= 'A' && str[i] <= 'Z') {
    q9 += str[i].toLowerCase();
  } else {
    q9 += str[i].toUpperCase();
  }
}
console.log("9.", q9);

// 10. First 5 characters equal to "Hello"
console.log("10.", str.slice(0, 5) === "Hello" ? "Yes" : "No");

// 11. Replace every vowel with *
let q11 = "";
for (let i = 0; i < str.length; i++) {
  if ("aeiouAEIOU".includes(str[i])) {
    q11 += "*";
  } else {
    q11 += str[i];
  }
}
console.log("11.", q11);

// 12. Check if string contains "Hello"
if (str.includes("Hello")) {
  console.log("12. Hi");
} else {
  console.log("12. Not Found");
}

// 13. Count spaces
let spaceCount = 0;
for (let i = 0; i < str.length; i++) {
  if (str[i] === " ") spaceCount++;
}
console.log("13.", spaceCount);

// 14. Length > 10 → uppercase else lowercase
if (str.length > 10) {
  console.log("14.", str.toUpperCase());
} else {
  console.log("14.", str.toLowerCase());
}

// 15. Print index of letter 'o'
console.log("15.");
for (let i = 0; i < str.length; i++) {
  if (str[i] === 'o') console.log(i);
}

// 16. Trim string and check even or odd length
let s16 = " Hello ";
s16 = s16.trim();
console.log("16.", s16.length % 2 === 0 ? "Even" : "Odd");

// 17. First and last character same
let s17 = "level";
console.log(
  "17.",
  s17[0] === s17[s17.length - 1] ? "Same" : "Not Same"
);

// 18. Replace first 3 characters with "ABC"
let s18 = "Hello";
if (s18.length >= 3) {
  s18 = "ABC" + s18.slice(3);
}
console.log("18.", s18);

// 19. Reverse a string
let s19 = "JavaScript";
let rev19 = "";
for (let i = s19.length - 1; i >= 0; i--) {
  rev19 += s19[i];
}
console.log("19.", rev19);
