console.log("Conditional tatements");

// 1. Even or Odd Checker
// Task: Take a number as input and print whether it's even or odd using % and if-else.
let Number = prompt("Enter a number:");
if (Number % 2 == 0) {
    console.log(Number + " is even.");
}
else{
    console.log(Number + " is odd.");
}

//output : 10 is even,9 is odd.


//  2. Temperature Alert
// Task: If temperature is greater than 30, print “It’s hot”, otherwise print “It’s cool” using if-else.
let Temperature = prompt("Enter the temperature:");
if (Temperature>30){
    console.log( Temperature + " It's Hot");
}
else{
    console.log( Temperature + " It's cool");
}

//output: 4 is even, 6 it's cool


//  3. Number Nature Checker
// Task: Check if a number is positive, negative, or zero using if-else.
let Num = prompt("Enter the number:");
if (Num > 0 ){
    console.log(Num  +  " is Positive Number");
}

else {
    console.log(Num  +  " is Negative Number");
}

// Output: -2 is negative number

//  4. Simple Grader
// Task: Print grade based on marks using if-else:
// • 90+ A
// • 75+ B
// • 60+ C
// • Below 60: Fail
 
let Marks = prompt("Enter the marks: ");
if (Marks >= 90){
    console.log(Marks + " Grade A");
}
 else {
    if (Marks >= 75){
        console.log(Marks + " Grade B");
    } 
    else {
        if(Marks >= 60) {
            console.log(Marks + " Grade C");
        }
        else {
            console.log(Marks + " Fail");
        }

    }
}

//Output : 59 Fail


//   5. Traffic Signal using if-else
// Task: Print signal meaning (Stop/Ready/Go) based on color using if-else.
let Color = prompt("Enter the Color: ")
if (Color =="red"){
    console.log(Color + " you have to Stop");
}
else {
    if(Color == "yellow"){
        console.log(Color + " you have to Ready");
    }
    else {
        console.log(Color + " you have to go");
    }
}

// Output : yellow you have to stop



//   6. FizzBuzz Classic
// Task:
// • Fizz if divisible by 3
// • Buzz if divisible by 5
// • FizzBuzz if both
// • Else: Not FizzBuzz

let numb = prompt("Enter the number: ");

if (numb % 3 === 0 && numb % 5 === 0) {
    console.log("FizzBuzz");
} else if (numb % 3 === 0) {
    console.log("Fizz");
} else if (numb % 5 === 0) {
    console.log("Buzz");
} else {
    console.log("Not FizzBuzz");
}




//   7. Largest of Three
// Task: Take 3 inputs and find the largest using if-else or nested if.
// Taking input from the user
let num1 = prompt("Enter the first number:");
let num2 = prompt("Enter the second number:");
let num3 = prompt("Enter the third number:");

if (num1 >= num2) {
  if (num1 >= num3) {
    console.log("The largest number is: " + num1);
  } else {
    console.log("The largest number is: " + num3);
  }
} else {
  if (num2 >= num3) {
    console.log("The largest number is: " + num2);
  } else {
    console.log("The largest number is: " + num3);
  }
}





//   8. Login Simulator
// Task: Check username and password with hardcoded credentials. Use nested if-else
let correctUsername = "user123";
let correctPassword = "password123";

let enteredUsername = prompt("Enter your username:");
let enteredPassword = prompt("Enter your password:");

if (enteredUsername === correctUsername) {
  if (enteredPassword === correctPassword) {
    console.log("Login successful! Welcome!");
  } else {
    console.log("Incorrect password. Please try again.");
  }
} else {
  console.log("Incorrect username. Please try again.");
}


//   9. Grade with Else-if Ladder
// Task: Take marks and print grade using else-if ladder:
// • 90–100: A
// • 80–89: B
// • 70–79: C
// • 60–69: D
// • Below 60: Fail


let marks = prompt("Enter your marks:");
marks = Number(marks);


if (marks >= 90 && marks <= 100) {
  console.log("Grade: A");
} else if (marks >= 80 && marks < 90) {
  console.log("Grade: B");
} else if (marks >= 70 && marks < 80) {
  console.log("Grade: C");
} else if (marks >= 60 && marks < 70) {
  console.log("Grade: D");
} else if (marks < 60 && marks >= 0) {
  console.log("Grade: Fail");
} else {
  console.log("Invalid marks. Please enter a number between 0 and 100.");
}

//   10. Traffic Signal using switch
// Task: Print signal meaning (Stop/Ready/Go) based on input using switch case.
// Take the signal color as input
let signal = prompt("Enter the traffic signal color (Red/Yellow/Green):").toLowerCase();
switch (signal) {
  case "red":
    console.log("Stop");
    break;
  case "yellow":
    console.log("Ready");
    break;
  case "green":
    console.log("Go");
    break;
  default:
    console.log("Invalid signal color. Please enter Red, Yellow, or Green.");
}

//   11. Nested Conditions: Number Checker
// Task: Take a number and:
// • If it's even, check if it's also a multiple of 4.
// • If it's odd, check if it's a prime number (simple check for 3 values).
// Take a number as input
let number = prompt("Enter a number:");


number = Number(number);


if (number % 2 === 0) {
  // If the number is even, check if it's a multiple of 4
  if (number % 4 === 0) {
    console.log(number + " is even and a multiple of 4.");
  } else {
    console.log(number + " is even but not a multiple of 4.");
  }
} else {
  
  if (number === 3 || number === 5 || number === 7) {
    console.log(number + " is odd and a prime number.");
  } else {
    console.log(number + " is odd but not a prime number.");
  }
}
//   12. Weekday Checker
// Task: Use switch to print whether a given day is a weekday or weekend.
// Take the day of the week as input (e.g., "Monday", "Tuesday", etc.)
let day = prompt("Enter a day of the week:").toLowerCase();
switch (day) {
  case "monday":
  case "tuesday":
  case "wednesday":
  case "thursday":
  case "friday":
    console.log(day.charAt(0).toUpperCase() + day.slice(1) + " is a weekday.");
    break;
  case "saturday":
  case "sunday":
    console.log(day.charAt(0).toUpperCase() + day.slice(1) + " is a weekend.");
    break;
  default:
    console.log("Invalid day. Please enter a valid day of the week.");
}

//   13. Age Category Classifier
// Task: Take age as input and classify:
// • Minor (<18)
// • Adult (18–60)
// • Senior (>60) Use if-else.
// Take age as input
let age = prompt("Enter your age:");
age = Number(age);

if (age < 18) {
  console.log("Minor");
} else if (age >= 18 && age <= 60) {
  console.log("Adult");
} else {
  console.log("Senior");
}

//   14. Calculator using switch
// Task: Take two numbers and an operator (+, -, *, /) and compute result using switch.
// Take two numbers and an operator as input
let num11 = prompt("Enter the first number:");
let num21 = prompt("Enter the second number:");
let operator = prompt("Enter the operator (+, -, *, /):");

// Convert the inputs to numbers
num1 = Number(num11);
num2 = Number(num21);

// Calculate result using switch
let result;

switch (operator) {
  case "+":
    result = num11 + num21;
    break;
  case "-":
    result = num11 - num21;
    break;
  case "*":
    result = num1 * num2;
    break;
  case "/":
    if (num21 !== 0) {
      result = num1 / num2;
    } else {
      console.log("Error: Division by zero is not allowed.");
      break;
    }
    break;
  default:
    console.log("Invalid operator. Please enter one of +, -, *, /.");
}

if (result !== undefined) {
  console.log(`The result of ${num1} ${operator} ${num2} is: ${result}`);
}

//   15. Month to Season Converter
// Task: Use switch to map month numbers (1–12) to seasons (Winter, Spring, Summer, Fall).
// Take month number as input (1-12)
let month = parseInt(prompt("Enter the month number (1-12):"));

// Determine the season using switch
let season;

switch (month) {
  case 1:
  case 2:
  case 12:
    season = "Winter";
    break;
  case 3:
  case 4:
  case 5:
    season = "Spring";
    break;
  case 6:
  case 7:
  case 8:
    season = "Summer";
    break;
  case 9:
  case 10:
  case 11:
    season = "Fall";
    break;
  default:
    console.log("Invalid month number. Please enter a number between 1 and 12.");
    break;
}

if (season) {
  console.log(`The month number ${month} corresponds to the season: ${season}.`);
}
//   16. Vowel or Consonant Identifier
// Task: Take a single character and determine if it’s a vowel, consonant, or not a letter using if-else.
// Take a single character as input
let char = prompt("Enter a single character:");

// Convert to lowercase for easier comparison
char = char.toLowerCase();

// Check if it's a single alphabet character
if (char.length !== 1 || !char.match(/[a-z]/i)) {
    console.log("Not a letter. Please enter a valid alphabet character.");
  } else if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
    console.log("Vowel");
  } else {
    console.log("Consonant");
  }

//   17. Password Strength Checker
// Task: Take a password string. Check using if-else:
// • Length < 6 → Weak
// • Length >= 6 but missing numbers → Medium
// • Length >= 6 and has numbers → Strong
// Take a password string as input
let password = prompt("Enter your password:");

// Check password strength
if (password.length < 6) {
  console.log("Password Strength: Weak");
} else if (!password.match1(/[0-9]/)) {
  console.log("Password Strength: Medium");
} else {
  console.log("Password Strength: Strong");
}

//  18. Time-Based Greeting
// Task: Based on hour (0–23), print:
// • Morning (5–11)
// • Afternoon (12–17)
// • Evening (18–21)
// • Night (22–4) Use if-else ladder.
// Take the hour as input (0–23)
let hour = Number(prompt("Enter the hour (0–23):"));

// Determine the greeting based on the hour
if (hour >= 5 && hour <= 11) {
  console.log("Good Morning");
} else if (hour >= 12 && hour <= 17) {
  console.log("Good Afternoon");
} else if (hour >= 18 && hour <= 21) {
  console.log("Good Evening");
} else if ((hour >= 22 && hour <= 23) || (hour >= 0 && hour <= 4)) {
  console.log("Good Night");
} else {
  console.log("Invalid hour. Please enter a value between 0 and 23.");
}

//   19. Triangle Type Checker
// Task: Given three sides, print if it forms:
// • Equilateral
// • Isosceles
// • Scalene Use conditional statements.
// Take three sides as input
let side1 = Number(prompt("Enter the first side:"));
let side2 = Number(prompt("Enter the second side:"));
let side3 = Number(prompt("Enter the third side:"));

// Check for triangle validity using triangle inequality
if (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {
  // Now classify the triangle
  if (side1 === side2 && side2 === side3) {
    console.log("Equilateral Triangle");
  } else if (side1 === side2 || side1 === side3 || side2 === side3) {
    console.log("Isosceles Triangle");
  } else {
    console.log("Scalene Triangle");
  }
} else {
  console.log("Invalid triangle. The sum of any two sides must be greater than the third side.");
}

//   20. Day Abbreviation to Full Name
// Task: Use switch to convert 'Mon' to 'Monday', 'Tue' to 'Tuesday', etc. If not valid, print "Invalid Day
// Take day abbreviation as input
let abbr = prompt("Enter a day abbreviation (e.g., Mon, Tue):").trim().toLowerCase();

// Convert abbreviation to full name using switch
let fullDay;

switch (abbr) {
  case "mon":
    fullDay = "Monday";
    break;
  case "tue":
    fullDay = "Tuesday";
    break;
  case "wed":
    fullDay = "Wednesday";
    break;
  case "thu":
    fullDay = "Thursday";
    break;
  case "fri":
    fullDay = "Friday";
    break;
  case "sat":
    fullDay = "Saturday";
    break;
  case "sun":
    fullDay = "Sunday";
    break;
  default:
    console.log("Invalid Day");
    break;
}

if (fullDay) {
  console.log(`Full name: ${fullDay}`);
}

