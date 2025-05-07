// /  1. Print Numbers 1 to 10Use a for loop to print numbers from 1 to 10.
for (let i = 1; i <= 10; i++) {
    console.log(i);
  }

//   2. Even Numbers from 1 to 20Use a while loop to print even numbers between 1 and 20.
let i = 2;
while (i <= 20) {
    console.log(i);
    i += 2;
}
//   3. Sum of First 10 Natural NumbersUse a for loop and add numbers from 1 to 10, then print
//   the result.
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log("Sum of first 10 natural numbers is:", sum);

//   4. Countdown from 10 to 1Use a while loop to print numbers from 10 to 1.
let i1 = 10;
while (i1 >= 1) {
  console.log(i1);
  i1--;
}


//   5. Check Odd or EvenUse a for loop from 1 to 10 and print whether each number is odd or
//   even using an if condition.  
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i + " is Even");
  } else {
    console.log(i + " is Odd");
  }
}


// 6. Multiplication Table of 5Use a for loop to print the multiplication table of 5 up to 10.
for (let i = 1; i <= 10; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}


// 7. Sum of Even Numbers from 1 to 50Use a while loop and if condition to calculate the sum
// of even numbers between 1 and 50.
let sum1 = 0;
let ij = 2;
while (ij <= 50) {
  if (ij % 2 === 0) {
    sum1 += ij;
  }
  ij++;
}
console.log("Sum of even numbers from 1 to 50 is:", sum);


// 8. Numbers Divisible by 3 and 5 (1 to 100)Use a for loop with if conditions to print numbers
// divisible by both 3 and 5.
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i);
  }
}

// 9. Print First 10 Odd NumbersUse a while loop to print the first 10 odd numbers.
let ik = 1;
let count = 0;
while (count < 10) {
  console.log(ik);
  ik += 2;  // Increment by 2 to get the next odd number
  count++;
}

// 10. Reverse String Using LoopAsk user for input and reverse the string using a for loop.
let inputString = prompt("Enter a string to reverse:"); 
let reversedString = "";
for (let i = inputString.length - 1; i >= 0; i--) {
  reversedString += inputString[i];
}
console.log("Reversed string:", reversedString);

// ὓ Difficult Tasks (Logic + Loops)
// 11. Check Prime NumberTake a number and use a loop with conditions to check if it's a prime
// number.
let number3 = parseInt(prompt("Enter a number to check if it's prime:"));
let isPrime = true;

if (number3 <= 1) {
  isPrime = false;
}

for (let i = 2; i <= Math.sqrt(number3); i++) {
  if (number3 % i === 0) {
    isPrime = false;
    break;
  }
}

if (isPrime) {
  console.log(number3 + " is a Prime Number");
} else {
  console.log(number3 + " is not a Prime Number");
}


// 12. Factorial of a NumberUse a loop to calculate factorial of a given number.
let number2 = parseInt(prompt("Enter a number to calculate its factorial:"));
let factorial = 1;

for (let i = 1; i <= number2; i++) {
  factorial *= i;
}

console.log("Factorial of " + number2 + " is:", factorial);

// 13. FizzBuzz (1 to 100)Print numbers from 1 to 100. For multiples of 3 print "Fizz", for multiples of
// 5 print "Buzz", for both print "FizzBuzz".
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// 14. Palindrome Checker (Word)Take a word as input and check if it's a palindrome using loop
// and conditions.
let word = prompt("Enter a word to check if it's a palindrome:");
let reversedWord = "";

for (let i = word.length - 1; i >= 0; i--) {
  reversedWord += word[i];
}

if (word === reversedWord) {
  console.log(word + " is a palindrome.");
} else {
  console.log(word + " is not a palindrome.");
}

// 15. Pattern Printing*Use nested loops to print the following pattern:
let rows = 5; // Number of rows for the pattern

for (let i = 1; i <= rows; i++) {
  let pattern = "";
  for (let j = 1; j <= i; j++) {
    pattern += "*";
  }
  console.log(pattern);
}
