const arrowSum = (a,b) => {
  console.log(a+b);
};

function  mul(a,b){
  return a * b;  
}
const arrowMul = (a,b) => {
  return a * b;
};

//  Count the no of vowels in given string using functions
function countVowels (str) {
  let count = 0;
  for (const char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "e" ||
      char === "o" ||
      char === "u" 
    )
    {
      count++;
    }
  }
   return count;
}


const countVow = (str) => {
  let count = 0;
  for (const char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "e" ||
      char === "o" ||
      char === "u" 
    )
    {
      count++;
    }
  }
   return count;
}
