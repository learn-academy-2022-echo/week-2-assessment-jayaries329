# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

Your answer:
The paramater of a function is what a function will take in as an input and an argument is the actual value that will be input into that function when it is called.

Researched answer:
When a function is declared, the values declared within the function when it is called are known as the argument. Whereas, the variables defined within the function during the function's declaration before it is called are known as the parameter of the function. 


2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

Your answer:
The predefined parameters that the method .map() takes are value, index, array, and this. Value is required, but index, array, and this are optional.

Researched answer:
Depending on what is needed to be shown or returned from an array, the predefined parameters that the .map() method takes (value, index, array, and this) will help to specify exactly what within the array will be displayed and how it will be displayed as well. More content can be added also with the help of the 'this' parameter as it allows the incorporation of an object containing extra data into the array.


3. What is the difference between map and filter?

Your answer:
Due to my experience with the map and filter, I'd say that the difference is that a map is a more efficienct version of a for loop and a .push method that iterates through an array and returns an array the same length as the original array. On the other hand, a filter makes decisions like a conditional statement as it iterates through an array and returns an array that is shorter than the original array. Only strings and arrays are able to be iterated in JavaScript.

Researched answer:
Map creates a new array by changing each individual element in an array without extracting any of those array elements. Filter creates a new array by taking out elements that don't belong based on the conditional that is set, which returns a shorter array with elements extracted from the original.


4. What is the DOM?

Your answer:
The DOM stands for Document Object Model and it is the visual representation of HTML code that the user interfaces with on a web page. My recent experiences of using React to make changes/additions to elements in the HTML page is a perfect example of DOM manipulation, such as changing a web page's background color and adding actions to buttons displayed on the page.

Researched answer:
The Document Object Model is an interface that handles HTML and XML documents as trees. The leaves on the branches of those trees are called nodes and those nodes contain objects along with event handlers. Using DOM methods, those trees can be accessed by programmers and changes can be made to the content, structure, or style of a document. The principal tech standards of the DOM were handled by the World Wide Web Consortium (W3C).


5. What is React? Why would you use it?

Your answer:
React is a JavaScript library and it is used for building user interfaces. Many of the conventions that are used in JavaScript are used in React, which to me, makes it easier to learn and navigate through once you're familiar with Javascript. React is basically an extension of JavaScript.

Researched answer:
React is a an open source Javascript library. With the use of frameworks, React can be used to develop applications utilizing a single page concept for efficiency. It is maintained by the company Meta, which is more famously known as Facebook and React requires additional libraries to perform DOM manipulation.


6. STRETCH: What is hoisting in JavaScript?

Your answer: 
I've heard the term used before, but I don't know what it is.

Researched answer: 
My research of hoisting in JavaScript was a behind-the-scenes look that introduced me to new terms as well as reminded me of a few terms that I've encountered already. Examples of the new terms are Execution Context, Compile Phase, and Execution Phase. Functions create Execution Context, which consists of the Compile Phase and the Execution Phase in that order. During the Compile Phase, the JavaScript engine goes through the function and creates a space in memory for variable and function declarations. Assignments, however, are not stored in memory. This is why variable and function declarations can be accessed and read by the engine even without having assignments. Hoisting is how JavaScript handles the variables that are declared in the program, specifically variables created with the var keyword. Global and local scope come into play because hoisting puts declared functions and variables (var) in a global scope for accessibility by the program. Digesting this bit of information explains the behavior of JavaScript and why we programmers get the Undefined and TypeError messages that occur in the event of not declaring a variable or function when we're writing code. Although the concept of hoisting is a bit confusing, I get the gist of it and it does give a better understanding of what's going on under the hood as we're writing code in JavaScript.


## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. User stories:
    A user story is done with the idea of putting people first in the process of software development and it is an informal, basic explanation of a software feature from the end user's perspective. The user story's purpose is to communicate how a software feature can provide value to the customer.

2. Spread operator:
    The spread operator is a feature in JavaScript that gives you access to the interior of an iterable object, such as an array and it allows you to duplicate (copy) that iterable. Simply put, the spread operator is the copy and paste option for iterables.

3. React props:
   React props is a shorter way of saying React Properties. Props are used to pass data from component to component - parent component to child component and they keep the app's data flow dynamic instead of static. React props eliminate the need for rewriting logic for every other component by altering a component's data to fit requirements of it's destination.

4. Conditional rendering:
    Just like conditionals in JavaScript, conditional rendering in React uses operators like if to create elements that represent the current state and then React updates the user interface to match those elements. Conditional rendering allows for partial rendering of a component while leaving the rest of the output unchanged.

5. DOM events:
    DOM events are what the average device user does, such as mouse events, touch events (on mobile devices), keyboard events, and window events. The event listener takes in the actions (events) and executes the command associated with that particular action. Example: When a user taps an app icon on their smartphone screen, something happens in the UI.
