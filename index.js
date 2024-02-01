console.log('Hello world')
var a;
var b = 2;
a = 7;
b = a;
console.log(a)
console.log(b);

let students = 30;
students = students **2;
console.log(students);


// constructing variables with strings
const myName = "Vai";
var ourString = `"Hello, my name is ` + myName + `, What's yours?"`
console.log(ourString)

var myString = `My name is ` + myName + `. I am a campus graduate.`;
console.log(myString)

// concatenating strings
var myString = "This is my first sentence";
myString += "This is my second sentence";
console.log(myString)

var ourString ="Arabella was a princess. ";
ourString += "She was in hiding.";
console.log(ourString)

// appending variables to strings
var anAdjective = "awesome";
var ourStr = "freeCodeCamp is ";
ourStr += anAdjective;
console.log(ourStr)

var someAdjective = "worthwhile";
var myStr = "Learning coding is ";
myStr += someAdjective;
console.log(myStr)

//finding length of a string
var FirstNameLength = 0;
var FirstName = "vailance";
FirstNameLength = FirstName.length;
console.log(FirstNameLength)

var LastNameLength = 0;
var LastName = "Mkanjumwa";
LastNameLength = LastName.length;
console.log(LastNameLength)

var MiddleNameLength =0;
var MiddleName = "Jannice";
MiddleNameLength = MiddleName.length;
console.log(MiddleNameLength);

//bracket notation to find first character in string
var firstLetterOfFirstName = "";
var firstName = "Vailance";
firstLetterOfFirstName = firstName[0];
console.log(firstLetterOfFirstName)

var middleLetterOfLastName = "";
var LastName = "Mkanjumwa";
middleLetterOfLastName = LastName[4];
console.log(middleLetterOfLastName)

//string immutability

var myStr = "jello world";
myStr = "hello world";
console.log(myStr)

//wordBlanks

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result ="";
    result += "The " + myAdjective + " "+ myNoun + " " + myVerb + " to the store " + myAdverb
    return result;
}
console.log(wordBlanks("dog", "srawny", "ran", "quickly"));
console.log(wordBlanks("bike", "sleek", "flew", "quickly"));

//store multiple values with Arrays - always starts and ends with a bracket.

var ourArray = ["John", 23];
var myArray = ["Quincy", 1];
console.log(myArray)
console.log(ourArray);

// nested/ multi-dimensional array- when some of the elements in an array is an array.

var ourArray = [["The Universe", 3, 0.002], ["everwhere", 45,101010, 0.555]];
var myArray = [["Bulls", 23], ["White wolves", 9]];
console.log(ourArray)

//Access Array Data with Indexes
var ourArray = [50,60,70];
var ourData = ourArray[0];
console.log(ourData)

var Array = [80,90,100];
var data = Array[0];
console.log(data);

var myArray = [40,60,70];
var ourData = myArray[0];
console.log(ourData)

//modify Array Data with Indexes
var ourArray = [18,64,99];
ourArray[1]= 45;
console.log(ourArray)

var myArray = [18,64,99];
myArray[0] = 45;
console.log(myArray)

//Access multi-dimensional Arrays with Indexes
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12],13,14]];
var ourData = myArray[2][1];
console.log(ourData)

//Manipulate arrays with push() adds elements at the end of the array
var ourArray = ["Stimpson", "J", "cat"];
ourArray.push(["happy", "joy"]);
console.log(ourArray)

var myArray = [["Jan", "Jin", 3], ["June", "Jos", 4]];
myArray.push(["Just", "Have", 0])
console.log(myArray)

//manipulate arrays with pop() removes elements at the end of an array
var ourArray = [1,2,3];
var removedFromOurArray = ourArray.pop();
console.log(ourArray)

var myArray = [["John,23"], ["cat",3]]
var removedFromMyArray = myArray.pop();
console.log(myArray)

//Manipulate Arrays with shift() removes elemts at the beginning of an array
var MyArray = [["John",23], ["Simpson", "J"]]
var removedFromMyArray = MyArray.shift()
console.log(MyArray)

var OurArray = [["Luka", "Corvus"], ["Malum", "Orion"]]
var removedFromOurArray = OurArray.shift()
console.log(OurArray);

//Manipulate Arrays with unshift() adds elemnts at the beginning of the array

var myArray = ["John",32]
myArray.shift()
myArray.unshift(["malum","Scorpius"])
console.log(myArray);

var ourArray = ["Mad queen","monster"];
ourArray.shift()
ourArray.unshift(["Death Queen",600])
console.log(ourArray)

//shopping list
var myList =[["cereal",3], ["milk",2], ["bananas", 3],["juice",2],["eggs", 12]];
console.log(myList);

//Write Reusable Code with Functions
function ourReusableFunction(){
    console.log("Heyya, world");
}
ourReusableFunction();
ourReusableFunction();
ourReusableFunction();
ourReusableFunction();

function reusableFunction(){
    console.log("Hi world");
}
reusableFunction();

//passing values to Functions with Arguments
function ourFunctionWithArgs(a, b) {
    console.log(a - b);
}
ourFunctionWithArgs(10, 5);

function myFunctionWithArgs(a, b){
    console.log(a + b);
}
myFunctionWithArgs(7, 8);

//Global Scope and Functions - scope refers to the visibility of variables
//local scope and functions
function myLocalScope(){
    var myVar = 5
    console.log(myVar);
}
myLocalScope();

function OurLocalScope(){
    var OurVar = 6;
    console.log(OurVar);
}
OurLocalScope();

//Global vs Local scope in Functions

var outerWear = "T-Shirt"
 
function myOutfit() {

    var outerWear = "sweater"
    return outerWear;
}

console.log(myOutfit());
console.log(outerWear);

//Return a Value from a Function with return
 function minusSeven(num) {
    return num - 7;
 }

 console.log(minusSeven(10));

 function timesFive(num){
    return num * 5;
 }
 console.log(timesFive(4));

//Understanding Undefined Value Returned from a Function
//Assignment with a Returned value *

var changed = 0;

/*function change(num){
    return (num+5) / 3;
}

changed = change(10);
console.log(changed); // output= 5
*/
var processed = 0;
function processArg(num) {
    return (num + 3) /5
}
processed = processArg(7);
console.log(processed);

// Stand in Line

function nextInLine(arr, item){
    
    arr.push(item);
    return arr.shift();
}

var testArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

//Boolean values

function welcomeToBooleans () {

    return false;
}

//Use Conditional Logic with If Statements
//Comparison with the Equality Operator(==)

function testEqual(val) {
    if (val==12) { return "Equal";
}
 return "Not Equal";
}

console.log(testEqual(4));

function TrueFalse(val) {
    if (val==11) {return "Equal"
}
return "Not Equal";
}
console.log(TrueFalse(12));


//Comparison with the Strict Equality Operator(===)

function testStrict(val){
    if(val===5){ return "Equal";
    }
    return " Not Equal";
}

console.log(testStrict(10))

function testStrict(val){
    if (val===9){return "Equal";
}
return "Not Equal"

}
console.log(testStrict(9))

function StrictEqual(val){
    if (val===10){return "Equal"
}
return "Not Equal";
}
console.log(StrictEqual(10));

//Practice comparing different values
 function compareEquality(a, b){
    if (a == b) {return "Equal";
}
return "Not Equal";

 }

 console.log(compareEquality(10, '10')) 

 function compareEquality(a, b){
    if (a==b){ return "Equal";
}
return "Not Equal";
 }

 console.log(compareEquality(12, 12))

 //comparison with the inequality operator(!=)

 function testNotEqual(val){
    if (val != 9){ return "Not Equal";
 }
 return "Equal";

 }
 console.log(testNotEqual(10));

 //comparison with strict inequality operator(!==)

 function testStrictNotEqual(val){
    if (val !== 7){ return "Not Equal"
}
return "Equal"

 }
  console.log(testStrictNotEqual(7))

  //comparison with the Logical and Operator

  function testGreaterThan(val){
    if (val > 100){ 
        return "over 100";}
        return "100 or under";
  }
  console.log(testGreaterThan(90))

  //comparison with the Greater Than or Equal To Operator(>=)
   function testGreaterThanOrEqualTo(val){
    if (val>= 100){ return "100 or over";
} 

return "Less than 100";

   }

console.log(testGreaterThanOrEqualTo(200))

//comparison with the Less Than Operator

function testLessThan(val){
    if (val < 10){ return "under 10";
}
return "10 or over"
}
console.log(testLessThan(20))



//comparison with the Logical and Operators(&& and)

function testLogicalAnd(val){
    if (val<=50 && val >=25){
        return "yes";
    }
        return"no";
}
console.log(testLogicalAnd(100))

//comparison with The Logical Or Operator(||{or}- pipes)

function testLogicalOr(val){
    if (val <10 || val >20){return "outside";
}
return "inside"
}
console.log(testLogicalOr(11))

//Else Statements
function testElse(val){
    var result = "";
    if(val > 5){
        result = "Bigger than 5";
    } else {
        result = "5 or smaller";
    }
    return result;
}
console.log(testElse(15));

//Else If Statements
function testElseIf(val){
    if(val < 5){
        return " Less Than 5";
    }
    else if (val < 10){
        return "Less Than 10";
    }
    else{ return "Between 5 and 10";}
}
console.log(testElseIf(3))
//logical order in If Else Statements values should be put in chronological order 
//chaining IfElse Statements

function testSize(num){
    if (num < 5){
        return "Tiny"
    }
    else if(num < 10){
        return "Small"
    }
    else if(num < 15){
        return "Medium"
    }
    else if(num < 20){
        return "Large"
    }
    else{
        return "Huge"
    }
}
console.log(testSize(30))

//golf code

var names = [ "Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"]
function golfScore(par, strokes){

    return "Change Me"
}

//switch statements - test values
function caseInSwitch(val){
    var answer = "";
    switch(val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
  }
  return answer;
}
console.log(caseInSwitch(4));
// Default Option in Switch Statements
function switchOfStuff(val){
    var answer = "";
    switch (val){
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "bird";
            break;
        case "c":
            answer = "cat";
            break;
        default:
            answer = "stuff";
            break;
    }
    return answer;
}

console.log(switchOfStuff("d"))
// Multiple Identical Options in Switch Statements
function sequentialSizes(val){
    var answer ="";
    switch (val){
        case 1:
        case 2:
        case 3:
            answer = "low";
            break;
        case 3:
        case 4:
        case 5:
            answer = "mid";
            break;
        case 6:
        case 7:
        case 8:
            answer = "high";
            break;
}
return answer
}
console.log(sequentialSizes(8))
// Replacing If Else Chains with Switch
function chainToSwitch(val){
    var answer ="";

    switch (val){
        case "bob":
           answer = "Marley";
           break;
        case 42:
            answer = "The Answer";
            break;
        case 1:
            answer = "There is no #1";
            break;
        case 99:
            answer = "Missed me by this much!";
            break;
        case 7:
            answer = "Ate Nine";
            break;
    }
    return answer
}
console.log(chainToSwitch("bob"))
   /* }

    if (val==="bob"){
        answer = "Marley";
    } else if (val === 42){
        answer = "The Answer"
    } else if (val === 1){
        answer = "There is no #1";
    } else if (val === 99){
        answer = "Missed me by this much!"
    } else if (val === 7){
        answer = "Ate Nine"
    }
    return answer
} */

//Returning Boolean Values from Functions
function isLess( a, b){
    return a < b;
}
console.log(isLess(40, 50));

// Returning Early Pattern from Functions *

//Build JavaScript Objects similar to arrays but instead use properties instead of indexes to access data

var ourDog = {
    "name": "Egan",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};
console.log(ourDog);

//Accessing Object Properties with Dot Notation

var testobj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};

var hatvalue = testobj. hat;
var shirtvalue = testobj. shirt;

console.log(shirtvalue)

// Accessing Object properties with Bracket Notation; can be used any time but must be used if the name of the property has a space in it

var testObj ={
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};
var entreeValue = testObj["an entree"];
var drinkvalue = testObj["the drink"];

console.log(testObj);
console.log(entreeValue);
console.log(drinkvalue);

//Accessing Object Properties with Variables

var testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas",
};

var playerNumber = 19;
var player = testObj[playerNumber];
console.log(player);

//Updating Object Properties using dot notation

var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};
  ourDog.name = "Happy Camper";
  console.log(ourDog);

  // Add New Properties to an object

  var ourDog = {
    "name": "Camper",
    "Legs": 4,
    "tails": 1,
    "friends": ["everything!"]
  }
  ourDog.bark = "bow-wow";
  console.log(ourDog);

  var ourDog = {
    "name": "Camper",
    "Legs": 4,
    "tails": 1,
    "friends":["everything!"]
  }
  ourDog['bark'] = "woof!";
 console.log(ourDog);

 //Delete Properties from an Object

 var ourDog = {
    "name": "Camper",
    "Legs": 4,
    "tails": 1,
    "friends":["everything!"],
    "bark": "woof!"
 }
 delete ourDog.bark;
 console.log(ourDog)

 // Using Objects for lookups

 function phoneticLookup(val){
    var result = "";

    var lookUp = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"
    }
   /* switch (val){
        case "alpha":
            result = "Adams";
            break;
        case "bravo":
            result = "Boston";
            break;
        case "charlie":
            result = "Chicago";
            break;
        case "delta":
            result  = "Denver";
            break;
        case "echo":
            result = "Easy";
            break;
        case "foxtrot":
            result = "Frank"
            break;

    }*/
    result = lookUp[val];
    return result;
 }
 console.log(phoneticLookup("delta"))

 //Testing objects for Properties*

 //Manipulting complex objects

 var myMusic = [
    {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats":[
        "CD",
        "8T",
        "LP"],
        "gold": true
    },
    {
        "artist": "Vailance Mkanjumwa",
        "title": "Cereal Man",
        "release_year": 2003,
        "format":[
"YouTube video"
        ]
    }
 ]
 console.log(myMusic);

 //Accessing Nested Objects

 var myStorage = {
    "car": {
        "inside":{
            "glovebox": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
 };
 var gloveBoxContents = myStorage.car.inside.glovebox
 console.log(gloveBoxContents)
 const passengerseatContent = myStorage["car"]["inside"]["passenger seat"];
 console.log(passengerseatContent);

 //Accessing Nested Arrays

 var myPlants = [
    {
        types: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "tree",
        list:[
            "fir",
            "pine",
            "birch"
        ]
    }
 ];

 var secondTree = myPlants[1].list[2];
 console.log(secondTree); 
 
 //Record Collection

 //Iterate with While Loops 

 /*Loops allow you to run the same code multiple times
 a While loop runs while a specified condition is true and stops while its no longer true */

 var myArray = [];

 var i = 0;
 while(i < 5) {
    myArray.push(i);
    i++;
 }
 console.log(myArray); /* [0, 1, 2, 3, 4];*/

// iterate with For Loops

var myArray = [];

for (var i = 0; i < 5; i++) {
    myArray.push(i);
}
console.log(myArray);

var ourArray = [];

for (var i = 0; i <= 5; i++){
    ourArray.push(i)
}
console.log(ourArray);

//Iterate Odd Numbers with a For Loop

var ourArray = [];

for (var i = 0; i < 10; i +=2) {
    ourArray.push(i);
}
console.log(ourArray); /* output = even numbers[0, 2, 4, 6, 8]; */

var myArray = [];

for (var i = 1; i < 10; i += 2){
    myArray.push(i);
}
console.log(myArray); /* output = odd numbers [1, 3, 5, 7, 9]*/

// Count Backwards with a For Loop

var myArray = [];

for (var i = 10; i > 0; i -= 2){
    myArray.push(i);
}
console.log(myArray); /*output = [10, 8, 6, 4, 2]*/

var ourArray = [];

for (i = 9; i > 0; i -= 2){
    ourArray.push(i);
}
console.log(ourArray); /*output = [9, 7, 5, 3, 1]*/

//Iterate Through an Array with a For Loop

var ourArr = [9, 10, 11, 12];
var ourTotal = 0;

for (var i = 0; i < ourArr.length; i++) {
    ourTotal +=ourArr[i];
}
console.log(ourTotal);/*output = 42*/

var myArr = [2, 3, 4, 5, 6];
var total = 0;
for (var i = 0; i < myArr.length; i++) {
    total += myArr[i];
}
console.log(total); /* output = 20*/

//Nesting For Loops

function multiplyAll(arr) {
    var product = 1;

    for (var i=0; i < arr.length; i++){
        for (var j=0; j < arr[i].length; j++){
            product *= arr[i][j];
        }
    }
    return product;
}

var product = multiplyAll([[1, 2],[3, 4],[5, 6, 7]]);
console.log(product);
/*i < arr.length ;arr.length  = 3: the first three arrays inside the main array
 j < arr[i].length ; arr[i].length = the individual elements inside each array in the main array*/ 


 // Iterate with Do...While Loops
/* while loop checks the condition before it runs the code within the loop
do...while loop will always run at least one time and then it will check the condition */

var myArray =[];
var i = 10;

while (i < 5) {
    myArray.push(i); i++;
}
console.log(i, myArray); /*output = 10, [] */

var myArray = [];
var i = 10;

do {
    myArray.push(i); i++;
} while (i < 5 );

console.log(i, myArray); /* output = 11, [10] */

// Profile Lookup

//Generate Random Fractions

function randomFraction() {

    return Math.random(); /*will genarate a number between 0 and 1, it 0 but it could not be 1 */ 
}
console.log(randomFraction());

//Generate Random Whole Numbers
var randomNumberBetween0and19 = Math.floor(Math.random() * 20);
console.log(randomNumberBetween0and19);

function randomWholeNum() {
    return Math.floor(Math.random() * 10);
}
console.log(randomWholeNum());

//Generate Random Whole Numbers within a Range

function ourRandomRange(ourMin, ourMax) {
    return Math.floor(Math.random()* (ourMax - ourMin + 1)) + ourMin;
}
console.log(ourRandomRange(6, 12));

//Use the parseInt Function /* takes a string and returns an integer*/

function convertToInteger(str){
    return parseInt(str);
}
console.log(convertToInteger("56"));

//Use the parseInt Function with a Radix
 /* radix specifies the base of the number in the string
default base is base 10 ; base 2 is binary*/

function convert(str) {
    return parseInt(str, 2)
}
console.log(convert("10011"));

//Use the Conditional (Ternary) Operator
/* condition ? statement-if-true : statement-if-false; */

function checkEqual(a, b){
    return a===b ? true : false
}
console.log(checkEqual(7,8));

//Use Multiple Conditional ( Ternary) Operators

function checkSign(num){
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero"
}
console.log(checkSign(0));

//differences between the var and let Keywords

/* let does not let you declare a variable twice
 "use strict" enables strict mode which catches common coding mistakes and unsafe actions
 "use strict" is used at the top of a full Javascript file or just in a function*/

 // Compare Scopes of the var and let Keywords
 /* when you declare variables with var, it is declared globally or locally if declared inside a function.
    The scope of let is limited to the block statement or expression that it was declared in.*/

    // Declare a Read - Only Variable with the const Keyword
    /*if you declare a variable with a const Keyword, you cannot reassign it afterwards. The assigned variable is mostly written in capital letters */

    function printMany(str){
       "use strict";

       var sentence = str + " is cool!";

       sentence = str + " is amazing!"

       for(var i = 0; i < str.length; i +=2) {
        console.log(sentence);
       }
    }
    printMany("FreeCodeCamp");

    function printManyTimes(str) {
        "use strict";

        const SENTENCE = str +" is cool!";

        for(let i = 0; i < str.length; i +=2){
            console.log(SENTENCE);
        }
    }
    printManyTimes("FreeCodeCamp");

    // Mutate an Array Declared with const

    const s = [5, 7, 2];
    function editInPlace() {
        "use strict";

        // s = [2, 5, 7]
       s[0] = 2;
       s[1] = 5;
       s[2] = 7;
       
    }
    console.log(s)


//prevent object mutation
/*object.freeze prevents object mutation.*/

// Use Arrow Functions to Write Concise Anonymous Functions

var magic = function() {
    return new Date();
};
     /* ||*/
var magic = () => {
    return new Date();
};
        /* ||  */
var magic = () => new Date();
        /* ||  */
const MAGIC = () => new Date();
console.log(magic)

// Write Arrow Functions with Parameters
 
const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1, 2], [3, 4, 5]));
 
// Write Higher Order Arrow Functions       /*map, filter, reduce*/
/*Higher order functions; map, filter and reduce; take functions as arguments for processing collections of data */
/* default parameters */

// Use the Rest Operator with Function Parameters
/* the rest operator(...) allows you to create a function that takes a variable number of arguments */

const SUM = (function() {
    return function SUM(...args) {
        return args.reduce((a, b) => a + b, 0)
    };
}) ();
console.log(SUM(1, 2, 3, 4))

//Use the spread Operator(...) to Evaluate Arrays In - Place
/* spread opearator expands an already existing array. only used in an argument to a function or in an array literal */

const ARR1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let ARR2;
(function() {
    ARR2 = [...ARR1];
}) ();
console.log(ARR2)

//Use Destructuring Assigment to Assign Variables from Objects
let a = "Hello";
let _a = "Hello";
let $a = "Hello";

// keywords cannot be used as variables.
/*Once a constant has been initialied, its value cannot be changed
You also cannot declare a constant without initializing it
e.g 
const x; //error
x = 2;

object is a non-primitive data type = can store collections of data.
Backticks are generally used when you need to include variables or expressions in a string. This  done by wrapping variables or expressions in [${}].
An operator is a special symbol used to perform operations on operands (values and variables).
List of opearators;
Assignment Operators
Arithmetic Operators
Comparison Operators
Logical Operators
Bitwise Operators
String Operators
Other Operators

// Assignment operators
Operator	Name	                  Example
=	       Assignment operator	       a = 7; // 7
+=	       Addition assignment	       a += 5; // a = a + 5
-=	       Subtraction Assignment	   a -= 2; // a = a - 2
*=	       Multiplication Assignment   a *= 3; // a = a * 3
/=	       Division Assignment	       a /= 2; // a = a / 2
%=	       Remainder Assignment	       a %= 2; // a = a % 2
**=	       Exponentiation Assignment   a **= 2; // a = a**2
*/

/*

JavaScript Comparison operators
Operator	Description                                                                                              	Example
==	        Equal to: true if the operands are equal	                                                                5==5; //true
!=	        Not equal to: true if the operands are not equal	                                                        5!=5; //false
===	        Strict equal to: true if the operands are equal and of the same type	                                    5==='5'; //false
!==     	Strict not equal to: true if the operands are equal but of different type or not equal at all	            5!=='5'; //true
>	        Greater than: true if the left operand is greater than the right operand	                                3>2; //true
>=	        Greater than or equal to: true if the left operand is greater than or equal to the right operand	        3>=3; //true
<	        Less than: true if the left operand is less than the right operand	                                        3<2; //false
<=	        Less than or equal to: true if the left operand is less than or equal to the right operand	                2<=2; //true
*/
/*
LOGICAL OPERATORS
Operator	Description	                                                                                            Example
&&	        Logical AND: true if both the operands/boolean values are true, else evaluates to false                 true && false; // false
||	        Logical OR: true if either of the operands/boolean values is true. evaluates to false if both are false	true || false; // true
!	        Logical NOT: true if the operand is false and vice-versa.	                                            !true; // false
*/*/