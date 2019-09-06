
// using map to create lists (ul's, tables etc.)
// A. 


var nameList = ["Frederikke", "Cathrine", "Claudia", "Faten", "Mia", "Annika"];
nameList.join();

function myFunction() {
    var x = document.createElement("LI");
    var t = document.createTextNode(nameList.join(" "));
    x.appendChild(t);
    document.getElementById("myLi").appendChild(x);
}
;


// im stucked here ....................... i will print out all names not single

