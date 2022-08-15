// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Echo 2022"
// console.log(cohort.split(""))

// a) Your answer: 
// This will log a string with each index value separated by a comma.

// b) Verify and explain:
// .split is a string method that will split a string into an array of substrings and when ("") is used, the string is split between words or letters, in this particular case.


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer:
// This will return an Undefined error.

// b) Verify and explain:
// Greeter is a function, so it should have an output. There is no return call on line 23, so this is why there is an error of Undefined.


// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map(number => number * 2)
// console.log(multipliedByTwo)

// a) Your answer:
// This will log an array containing the numbers 8, 10, 12, 14, 16

// b) Verify and explain:
// .map is a method that does iteration on items within an array and that method has had another multiplication function passed to it, so an iteration performing a times two multiplication on each value in the array happened, thus returning a result of the original number doubled.


// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter(number => number % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer: 
// This will log an array of numbers containing the numbers 11, 13, 15.

// b) Verify and explain:
// .filter is a method that does iterations on arrays and they also contain a built-in conditional statement. Since the method was passed a function using division to determine which numbers in the array are odd numbers, an iteration was done on each number in order to return a shorter array with only those odd values.


// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer:
// This will log "JavaScript"

// b) Verify and explain:
// Dot notation is used in objects as a specific pathway to an element. Using the object name myCodingSkills with .languages[0] attached to it says to look into the object and find the value that exists at the zero index of the array that is at the languages key.


// --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Echo",
    this.year = 2022
  }
}
const learnStudent = new Learn("George")
// console.log(learnStudent)

// a) Your answer: 
// This will log the string "George" as the value for student.

// b) Verify and explain:
// The constructor has name as a parameter and it is dynamic, so any name can be an input. Whatever name that is put into the constructor as an argument will appear as the value for student. So by declaring a new variable that contains the class Learn with "George" as the input argument and console logging that variable, the name George will be the value of the output when referencing the student key.
