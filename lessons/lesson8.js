// js Functions

//declarative function

helloOne(); // this funtion can be called before it is declared
function helloOne(){
    console.log("Hello One");
}

//helloOne(); // calling the function


//Anonymous function

var helloTwo = function(){
    console.log("Hello Two");
}

helloTwo(); // calling the function

//ES6 arrow function

var helloThree = () => {
    console.log("Hello Three");
}

helloThree(); // calling the function

//Funtion with arguments

function printName(name, lastName){
    console.log("Hello " + name + " " + lastName);
}

printName("Aaron", "Catzim"); // calling the function with an argument

//Function with return

function multiplyByTwo(number){
    var result = number * 2;
    return result;
}
var myResult = multiplyByTwo(5); // calling the function with an argument
console.log(myResult); // printing the result of the function

//import function

import {printAge} from '../helpers/printHelper.js';
printAge(15); // calling the function with an argument


//import everithing 
import * as printHelper from '../helpers/printHelper.js';
printHelper.printAge(20); // calling the function with an argument