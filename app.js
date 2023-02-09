// 1.1. What is the difference between a parameter and an argument?

// parameter is placeholder variable

// 1.2. Within a function, what is the difference between return and console.log?

// return stopt the function.

// 1. 3. What are the implications of the ability of a function to return a value?

//

// 2. calculateCube
function calculateCube(num) {
    return num ** 3
}
console.log(calculateCube(2))

// 3. isAVowel
function isAVowel(letter) {
    return "aeiou".includes(letter.toLowerCase())
}
console.log(isAVowel("a"))

// 4. getTwoLengths
function getTwoLengths(word1, word2) {
    return [word1.length, word2.length]
}
console.log(getTwoLengths("Hank", "Hippopopalous"))

// 5. sumArray
function sumArray(arr) {
    //let sum = arr.reduce((acc, curr) => acc + curr) questo e un'altro modo piu veloce usando il method .reduce
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}
console.log(sumArray([1, 2, 3, 4, 5, 6]))

// 6.1 checkPrime
function checkPrime(num) {
    for (let i = 2; i < Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true
}
console.log(checkPrime(13))

// 6.2 printPrimes
function printPrimes(num) {
    for (let i = 2; i <= num; i++){
        if (checkPrime(i)){
            console.log(i)
        }
    }
}
console.log(printPrimes(97))

// 7. printLongestWord
function printLongestWord(arr) {
    let longestWord = "";
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longestWord.length){
            longestWord = arr[i]
        }
    }
    // let longestWord = arr.reduce((acc, curr) => {    Altro modo per fare la stessa cosa con method .reduce
    //     if (curr.length > acc.length) {
    //         acc = curr;
    //     }
    //     return acc;
    //} , "")
    return longestWord
}

console.log(printLongestWord(["BoJack", "Princess", "Diana", "a", "Max", "Peanutbutter", "big", "blog"]))

// BONUS!

// 8. eulerFibo
function eulerFibo(num) {
    let x = 1;
    let y = 2;
    let z = null;
    let sum = 0;

    while (y <= num) {
        if (y % 2 == 0) {
            sum += y;
        }
        z = x + y;
        x = y;
        y = z;
    } 
    return sum;
}

console.log(eulerFibo(4000000))

// 9. findNeedle
function findNeedle(arr) {
    // YOUR CODE HERE
}

// 10. sumPositive
function sumPositive(arr) {
    // YOUR CODE HERE
}

module.exports = {
    calculateCube,
    isAVowel,
    getTwoLengths,
    sumArray,
    checkPrime,
    printPrimes,
    printLongestWord,
    eulerFibo,
    findNeedle,
    sumPositive
};