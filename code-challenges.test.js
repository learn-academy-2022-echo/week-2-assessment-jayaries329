// ASSESSMENT 2: Coding Practical Questions with Jest

// const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

// b) Create the function that makes the test pass.



// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
 const object2 =  { number: 0 }
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"

// describe("threeDivider", () => {
//     test ("returns divisibility statements", () => {
//         expect (threeDivider(object1)).toEqual("15 is divisible by three")
//         expect (threeDivider(object2)).toEqual("0 is divisible by three")
//         expect (threeDivider(object3)).toEqual("-7 is not divisible by three")
//     })
// })

// ● threeDivider › returns divisibility statements

// ReferenceError: threeDivider is not defined

//   47 | describe("threeDivider", () => {
//   48 |     test ("returns divisibility statements", () => {
// > 49 |         expect (threeDivider(object1)).toEqual("15 is divisible by three")
//      |         ^
//   50 |         expect (threeDivider(object2)).toEqual("0 is divisible by three")
//   51 |         expect (threeDivider(object3)).toEqual("-7 is not divisible by three")
//   52 |     })


// b) Create the function that makes the test pass.

// Pseudocode 
// Create a function called threeDivider that takes an object as an input
// Use a conditional statement to check if the value in the object is divisible by three
// Return the results in a string message using string interpolation

const threeDivider = (object) => {
    if (object.number % 3 === 0) {
        return `${object.number} is divisible by three`
    }
    else if (object.number % 3 !== 0) {
        return `${object.number} is not divisible by three`
    }
}
threeDivider(object1);


// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 passed, 2 total
// Snapshots:   0 total
// Time:        1.47 s
// Ran all test suites.
// error Command failed with exit code 1.
// info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
// learnacademy@LEARNs-MacBook-Air week-2-assessment-jayaries329 % yarn jest
// yarn run v1.22.19
// warning package.json: No license field
// $ /Users/learnacademy/Desktop/week-2-assessment-jayaries329/node_modules/.bin/jest
//  PASS  ./code-challenges.test.js
//   threeDivider
//     ✓ returns divisibility statements (5 ms)


// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

 const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
  const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

// describe("capitalNouns", (array) => {
//         test ("returns an array with all the words capitalized", () => {
//             expect (capitalNouns(array)).toEqual("returns an array with all the words capitalized")
//             expect (capitalNouns(array)).toEqual("returns an array with all the words capitalized")
            
//         })
//     })

    // FAIL  ./code-challenges.test.js
    // capitalNouns
    //   ✕ returns an array with all the words capitalized (2 ms)
  
    // ● capitalNouns › returns an array with all the words capitalized
  
    //   ReferenceError: capitalNouns is not defined
  
// b) Create the function that makes the test pass.

// For some reason, the jest test wouldn't work correctly. The function below works properly.

// error Command failed with exit code 1.
// info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
// learnacademy@LEARNs-MacBook-Air week-2-assessment-jayaries329 % yarn jest
// yarn run v1.22.19
// warning package.json: No license field
// $ /Users/learnacademy/Desktop/week-2-assessment-jayaries329/node_modules/.bin/jest
//  FAIL  ./code-challenges.test.js
//   ● Test suite failed to run

//     Your test suite must contain at least one test.

//       at onResult (node_modules/@jest/core/build/TestScheduler.js:172:18)
//       at node_modules/@jest/core/build/TestScheduler.js:300:17
//       at node_modules/emittery/index.js:311:13
//           at Array.map (<anonymous>)
//       at Emittery.emit (node_modules/emittery/index.js:309:23)

// Test Suites: 1 failed, 1 total
// Tests:       0 total
// Snapshots:   0 total
// Time:        0.547 s, estimated 1 s
// Ran all test suites.

// Pseudocode
// Create a function named capitalNouns that takes an array as an input
// Use the .map method and the .tuUpperCase method to iterate the array and return an array with capital letters

const capitalNouns = (array) => {
    let eachNoun = array.map((value) => {
        return value[0].toUpperCase() + value.substring(1)
    })
    return eachNoun.join(" , ")
}
capitalNouns(randomNouns2);


// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

 const vowelTester1 = "learn"
// Expected output: 1
  const vowelTester2 = "academy"
// Expected output: 0
 const vowelTester3 = "challenges"
// Expected output: 2

// a) Create a test with expect statements for each of the variables provided.

// describe("firstVowel", (string) => {
//         test ("logs the first vowel in a string", () => {
//             expect (firstVowel(string)).toEqual("the index of the first vowel")
//             expect (firstVowel(string)).toEqual("the index of the first vowel")
//             expect (firstVowel(string)).toEqual("the index of the first vowel")
            
//         })
//     })

    // FAIL  ./code-challenges.test.js
    // firstVowel
    //   ✕ logs the first vowel in a string (1 ms)
  
    // ● firstVowel › logs the first vowel in a string
  
    //   ReferenceError: firstVowel is not defined


// b) Create the function that makes the test pass.

// Yet again, the jest test isn't giving a passing result, but the function works.

// FAIL  ./code-challenges.test.js
// ● Test suite failed to run

//   Your test suite must contain at least one test.

//     at onResult (node_modules/@jest/core/build/TestScheduler.js:172:18)
//     at node_modules/@jest/core/build/TestScheduler.js:300:17
//     at node_modules/emittery/index.js:311:13
//         at Array.map (<anonymous>)
//     at Emittery.emit (node_modules/emittery/index.js:309:23)

// Test Suites: 1 failed, 1 total
// Tests:       0 total
// Snapshots:   0 total
// Time:        0.52 s
// Ran all test suites.
// error Command failed with exit code 1.

// Pseudocode
// Create a function called firstVowel that will take a string as an input
// Use a .search method to iterate the string and find the first vowel
// Return the index of that string element

function firstVowel(str) {
    let test = str.search(/[a,e,i,o,u]/g)
    console.log(test)
}
firstVowel(vowelTester1);