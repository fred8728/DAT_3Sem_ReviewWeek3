
// A. Added three div to html and changed the backgroundcolor of the divs
document.getElementsByTagName("div")[0].style.backgroundColor = 'green';
document.getElementsByTagName("div")[1].style.backgroundColor = 'red';
document.getElementsByTagName("div")[2].style.backgroundColor = 'blue';

// B. Add a button and assign clickhandler to buttom - when click div should be given uniqie color
//The answer below is not all correct - i can only make the words background change color by clicking on them NOT by button

var id = document.getElementById("x");
var id1 = document.getElementById("x1");
var id2 = document.getElementById("x2");

id.addEventListener("click", function () {
    this.style.backgroundColor = "red";
});

id1.addEventListener("click", function () {
    this.style.backgroundColor = "yellow";
});

id2.addEventListener("click", function () {
    this.style.backgroundColor = "green";
});
