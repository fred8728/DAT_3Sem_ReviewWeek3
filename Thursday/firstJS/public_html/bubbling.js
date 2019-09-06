// A. Add a click handler to each id and write code, so when clicked, each div will write to the console "Hi from idOfTheDiv".

document.getElementById("b1").addEventListener("click", function () {
    document.getElementById("demo").innerHTML = "Hi from IdFromTheDiv to b1";
});

document.getElementById("b2").addEventListener("click", function () {
    document.getElementById("demo").innerHTML = "Hi from IdFromTheDiv to b2";
});

// B. Add 10 more divs with unique ID and assign a single eventhandler (with the event argument) to this div

outer.addEventListener("click", function (id) {
    var me = this;
    var target = id.target;
});

// C I misunderstood the other assignment - i have only looked at HTML outputs
