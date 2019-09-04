/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//Function Declaration
       //Observe: no return type, no type on parameters
function add(n1, n2){
   return n1 +n2;
}

//Function Expression
var sub = function(n1,n2){
  return n1 - n2
} 

//Callback example
var cb = function(n1,n2, callback){
  return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);
};


// 2. Call the functions - see the answers below

console.log(add(1+2)); // i thought it would printout 3 but was Nan (not a number)
console.log(add); // will printout the function add
console.log(add(1,2,3)); // will printout 3
console.log(add(1)); //will print out nan (not a number)
console.log(cb(3,3,add)); // will print out: Result from the two numbers 3 + 3 = 6
console.log( cb(4,3,sub)); // will print out: Result from the two numbers 4 - 3 = 1 
// console.log(cb(3,3,add())); the problem with this one is that cb needs a callback(like add or sub) and by putting () after add it becomes a function
console.log(cb(3,"hh",add)); // will print out: Result from the two numbers 3+hh = 3hh

// 3. Errorhandling

try {
  console.log(cb(3,3,add()));
  throw new Error('Whoops!');
} catch (e) {
  console.log("Something is wrong - try again! ");
}

// 4. Write a new function and use it as callback for cb
function mul(n1,n2){
   return n1 * n2;
 }

console.log(cb(5,5,mul));

//5 Call cb with an anonymous function that divides the first argument with the second
var ano = function(n1, n2){
  return n1 / n2;
};
console.log(cb(30,5,ano));

//Callbacks (with map filter and forEach)

//1. Declare an array  and initialize it with some names - use filter() method to create a new array with names of length <=3

var array = ["Frederikke", "Simone", "Bo", "Mads", "Malene", "Birgitte", "Karsten", "Pia", "Putte"];

function longerThan(name){
  return name.length <= 3;
}

var remove = array.filter(longerThan);
console.log(remove);

// 2. Use map() method to make array from before uppercased

var upper = array.map(function(letters){
  return letters.toUpperCase();
});

console.log(upper);

