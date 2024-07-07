
// String Manipulation Functions:

function reverseString(str) {
    return str.split('').reverse().join('');
}
let originalString = "Hello, World!";
let reversedString = reverseString(originalString);

console.log(reversedString);




function countCharacters(str) {
    return str.length;
}


let myString = "Hello, World!";
let characterCount = countCharacters(myString);
console.log(characterCount);

function capitalizeWords(sentence) {
  
    let words = sentence.split(' ');

   
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }

    return words.join(' ');
}

let sentence = "hello, world! this is a test sentence.";
let capitalizedSentence = capitalizeWords(sentence);
console.log(capitalizedSentence);


// Array Functions:

function findMax(arr) {
    if (arr.length === 0) {
        Error("Array is empty");
    }
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

function findMin(arr) {
    if (arr.length === 0) {
        throw new Error("Array is empty");
    }
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}



function calculateSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}




function filterArray(arr, condition) {
    return arr.filter(condition);
}



// Mathematical Functions:

function factorialIterative(n) {
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers");
    }
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}





function isPrime(n) {
    if (n <= 1) {
        return false;
    }
    if (n <= 3) {
        return true;
    }
    if (n % 2 === 0 || n % 3 === 0) {
        return false;
    }
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) {
            return false;
        }
    }
    return true;
}

function fibonacciSeries(n) {
    let fib = [0, 1];
    let i = 2;
  
    while (i < n) {
      fib[i] = fib[i - 1] + fib[i - 2];
      i++;
    }
  
    return fib.slice(0, n);
  }

