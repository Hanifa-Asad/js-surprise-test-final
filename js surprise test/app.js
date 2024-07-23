// question 1
// answer 1
function reverseArray(arr) {
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
    return arr;
}

const originalArr = [1, 2, 3, 4, 5];
const reversedArr = reverseArray(originalArr);
console.log("Original Array:", originalArr);
console.log("Reversed Array:", reversedArr);

// question 2
// answer 2


function filterNegativeNumbers(arr) {
    return arr.filter(function(number) {
      return number >= 0;
    });
  }
  
  
  const numbers = [1, -2, 3, -4, 5, -6, 7];
  const positiveNumbers = filterNegativeNumbers(numbers);
  console.log(positiveNumbers); 



//  question 3
// answer 3

function countVowels(str) {
    
    const vowels = /[aeiouAEIOU]/g;
    
    
    const matches = str.match(vowels);
    
    
    return matches ? matches.length : 0;
  }
  
  
  const sentence = "Hello, how are feeling now?";
  const vowelCount = countVowels(sentence);
  console.log(vowelCount); 



// question 4 
// answer  4


function isPalindrome(str) {
   
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    

    const reversedStr = cleanedStr.split('').reverse().join('');
    
    return cleanedStr === reversedStr;
  }
  
  
  console.log(isPalindrome("rotor")); 
  console.log(isPalindrome("pop")); 
  console.log(isPalindrome("radar")); 
  console.log(isPalindrome("refer")); 
  console.log(isPalindrome("hello")); 
  console.log(isPalindrome("Was it a car or a cat i saw")); 

//   question 5
// answer 5

function isInRange(a, b) {
  
    const isAInRange = a >= 50 && a <= 99;
    const isBInRange = b >= 50 && b <= 99;
    

    return isAInRange || isBInRange;
  }
  
 
  console.log(isInRange(56, 32)); 
  console.log(isInRange(99, 65)); 
  console.log(isInRange(20, 40)); 
  console.log(isInRange(89, 100)); 
  console.log(isInRange(47, 50)); 


//   question 6
// answer 6
function getMappedMinValue(arr, mapFunction) {
  
    const mappedValues = arr.map(mapFunction);
    

    const minValue = Math.min(...mappedValues);
    
    return minValue;
  }
  
 
  const number = [ 2, 3, 4, 5];
  const square = num => num * num;
  
  const minSquareValue = getMappedMinValue(number, square);
  console.log(minSquareValue); 

//   question 7
//  answer 7

function repeatLastThreeChars(str) {

    if (str.length < 3) {
      return "String length must be 3 or above";
    }
    
  
    const lastThreeChars = str.slice(-3);
    
  
    const updatedString = lastThreeChars.repeat(4);
    
    return updatedString;
  }
  

  console.log(repeatLastThreeChars("Ecmascript"));
  console.log(repeatLastThreeChars("welcome"));      
  console.log(repeatLastThreeChars("abc"));        
  console.log(repeatLastThreeChars("mn"));         


//   question 8
// answer 8



function findAngleType(angle) {
    if (angle > 0 && angle < 90) {
      return "Acute angle";
    } else if (angle === 90) {
      return "Right angle";
    } else if (angle > 90 && angle < 180) {
      return "Obtuse angle";
    } else if (angle === 180) {
      return "Straight angle";
    } else {
      return "Invalid angle";
    }
  }
  

  console.log(findAngleType(35));   
  console.log(findAngleType(70));   
  console.log(findAngleType(90));  
  console.log(findAngleType(170));  
  console.log(findAngleType(210)); 


//   question 9
// answer 9


function smallestRoundNumber(num) {
   
    if (num % 10 === 0) {
      return num;
    }
    
  
    return Math.ceil(num / 10) * 10;
  }
  

  console.log(smallestRoundNumber(591));  
  console.log(smallestRoundNumber(592));  
  console.log(smallestRoundNumber(1234)); 
  console.log(smallestRoundNumber(97));   
  console.log(smallestRoundNumber(2000)); 


//   question 10
// answer 10


function findIndexOfItem(arr, item) {
  
    for (let i = 0; i < arr.length; i++) {
   
      if (arr[i] === item) {

        return i;
      }
    }

    return -1;
  }
  
 
  const array = [20, 30, 40, 50, 60];
  const itemToFind = 60;
  
  const index = findIndexOfItem(array, itemToFind);
  console.log(index); 