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





//   8. Login Simulator
// Task: Check username and password with hardcoded credentials. Use nested if-else.






//   9. Grade with Else-if Ladder
// Task: Take marks and print grade using else-if ladder:
// • 90–100: A
// • 80–89: B
// • 70–79: C
// • 60–69: D
// • Below 60: Fail





//   10. Traffic Signal using switch
// Task: Print signal meaning (Stop/Ready/Go) based on input using switch case.






//   11. Nested Conditions: Number Checker
// Task: Take a number and:
// • If it's even, check if it's also a multiple of 4.
// • If it's odd, check if it's a prime number (simple check for 3 values).





//   12. Weekday Checker
// Task: Use switch to print whether a given day is a weekday or weekend.





//   13. Age Category Classifier
// Task: Take age as input and classify:
// • Minor (<18)
// • Adult (18–60)
// • Senior (>60) Use if-else.





//   14. Calculator using switch
// Task: Take two numbers and an operator (+, -, *, /) and compute result using switch.






//   15. Month to Season Converter
// Task: Use switch to map month numbers (1–12) to seasons (Winter, Spring, Summer, Fall).






//   16. Vowel or Consonant Identifier
// Task: Take a single character and determine if it’s a vowel, consonant, or not a letter using if-else.






//   17. Password Strength Checker
// Task: Take a password string. Check using if-else:
// • Length < 6 → Weak
// • Length >= 6 but missing numbers → Medium
// • Length >= 6 and has numbers → Strong





//  18. Time-Based Greeting
// Task: Based on hour (0–23), print:
// • Morning (5–11)
// • Afternoon (12–17)
// • Evening (18–21)
// • Night (22–4) Use if-else ladder.






//   19. Triangle Type Checker
// Task: Given three sides, print if it forms:
// • Equilateral
// • Isosceles
// • Scalene Use conditional statements.







//   20. Day Abbreviation to Full Name
// Task: Use switch to convert 'Mon' to 'Monday', 'Tue' to 'Tuesday', etc. If not valid, print "Invalid Day

