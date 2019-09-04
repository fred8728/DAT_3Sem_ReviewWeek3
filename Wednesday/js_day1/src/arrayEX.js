/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// A. create the two arrays

var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];

// B. Use the concat() method to merge the arrays
var all = boys.concat(girls);
console.log(all);


// C. Use the join() method to reduce an array to a string with comma and seperator
console.log(all.join());
console.log(all.join("-"));

// Use unshift() to start and push(..) to end when adding items to array

// D. Adding in the end
console.log(all.push("Lone", "Gitte")); 

// E. Adding in the start
console.log(all.unshift("Hans", "Kurt")); //adding in the start

//Use shift() to start and pop(..) to end when removing items from array
// F. Removing the first name in array (Hans)
console.log(all.shift());

// G. Removing the last name in the array (Gitte)
console.log(all.pop());

//Use the splice() method to change the array by removing exicting elements and/or adding new

// H. Remove ole and Janne from the middle of the array
//They can stay for now - stupid method - it doesnt remove as i want to

// I. Use the reverse() method 
var reversed = all.reverse();
console.log("reversed: " + reversed);


// J. Use the sort() method
console.log(all.sort());

// K. This assignment is red - and i dont know how to do it 


// L. Convert all the names in the array to uppercase
console.log(all.map(function(toUpper){return toUpper.toUpperCase()})); //put a function into it


// M. Create new array containing all the names that start with either I or L

