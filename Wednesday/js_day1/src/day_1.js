

//Function Declaration
//Observe: no return type, no type on parameters
function add(n1, n2) {
  return n1 + n2;
}

//Function Expression
var sub = function (n1, n2) {
  return n1 - n2;
};

//Callback example
var cb = function (n1, n2, callback) {
  return "Result from the two numbers: " + n1 + "+" + n2 + "=" + callback(n1, n2);
};


// 2. Call the functions - see the answers below

console.log(add(1 + 2)); // i thought it would printout 3 but was Nan (not a number)
console.log(add); // will printout the function add
console.log(add(1, 2, 3)); // will printout 3
console.log(add(1)); //will print out nan (not a number)
console.log(cb(3, 3, add)); // will print out: Result from the two numbers 3 + 3 = 6
console.log(cb(4, 3, sub)); // will print out: Result from the two numbers 4 - 3 = 1 
// console.log(cb(3,3,add())); the problem with this one is that cb needs a callback(like add or sub) and by putting () after add it becomes a function
console.log(cb(3, "hh", add)); // will print out: Result from the two numbers 3+hh = 3hh

// 3. Errorhandling

try {
  console.log(cb(3, 3, add()));
  throw new Error('Whoops!');
} catch (e) {
  console.log("Something is wrong - try again! ");
}

// 4. Write a new function and use it as callback for cb
function mul(n1, n2) {
  return n1 * n2;
}

console.log(cb(5, 5, mul));

//5 Call cb with an anonymous function that divides the first argument with the second
var ano = function (n1, n2) {
  return n1 / n2;
};
console.log(cb(30, 5, ano));

//Callbacks (with map filter and forEach)

//1. Declare an array  and initialize it with some names - use filter() method to create a new array with names of length <=3

var array = ["Frederikke", "Simone", "Bo", "Mads", "Malene", "Birgitte", "Karsten", "Pia", "Putte"];

function longerThan(name) {
  return name.length <= 3;
}
console.log(array.filter(longerThan));

array.forEach(function(names) {
    console.log(names);
});

// 2. Use map() method to make array from before uppercased

var upper = array.map(function (letters) {
  return letters.toUpperCase();
});

console.log(upper);

// 3. it doesnt use map or join - but it can write out the whole list and if u click on them u can see the name in console 

var people = document.querySelectorAll(".nameList li");

for (person of people) {
  person.addEventListener('click', function () {
    console.log(this);
  });
}

// 4. Use the filter function to get arrays with the following : 

var cars = [
  { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
  { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
  { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
  { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
  { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];

// A. Array with cars newer than 1999
function newerThan1999 (number){
  for(car of cars){
    if(number.year > 1999){
    return number;
  }
}}
console.log(cars.filter(newerThan1999));

// B. Array with only volvo
function modelVolvo (name){
  for(car of cars){
    if(name.make == "Volvo"){
    return name;
  };
}}
console.log(cars.filter(modelVolvo));

// C. Array with all cars with a price below 5000
function priceBelow5000 (number){
  for(car of cars){
    if(number.price < 5000){
    return number;
  }
}}
console.log(cars.filter(priceBelow5000));

// 4a not gonna happen

//Asynchronous Callbacks
// 1. My guess would be aaaa, ddddd, fffff, eeee, bbbbb because there isnt a delay on a, d or f 
// and ee is only delayed with 1000 and bb is delayed with 2000 

var msgPrinter = function(msg,delay){
  setTimeout(function(){
    console.log(msg);
  },delay);
};
console.log("aaaaaaaaaa");
msgPrinter ("bbbbbbbbbb",2000);
console.log("dddddddddd");
msgPrinter ("eeeeeeeeee",1000);
console.log("ffffffffff");

// 2. My answer was correct

