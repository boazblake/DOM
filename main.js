document.querySelector("#thanks button").addEventListener('click', function() {
    alert("yowch! don't click me so hard!")
})

document.querySelector("#double button").addEventListener('click', function() {
    // alert("yowch! don't click me so hard!")
    var doubleNum = document.querySelector("#compoundInvestment")
    doubleNum.innerHTML = doubleNum.innerHTML * 2
})

document.querySelector("#color-circle button").addEventListener('click', function() {
    // alert("yowch! don't click me so hard!")
    var circle = document.querySelector("#circle-bw");
    
    if (circle.style.background === "black") {
        circle.style.background = "white";
    } else {
        circle.style.background = "black";

    }

})

var circle = document.querySelector(".circle-red");
var circle_computed_style = window.getComputedStyle(circle)
var original_Width = parseInt(circle_computed_style.width, 10)
var original_Height = parseInt(circle_computed_style.height, 10)

document.querySelector("#blow-up button").addEventListener('click', function() {
	
	
	
	var current_Width = parseInt(circle_computed_style.width, 10) 
	var current_Height = parseInt(circle_computed_style.height, 10)
	
	if (current_Width <= 320){
		circle.style.width = (current_Width * 2) + "px"
		circle.style.height = (current_Height * 2) + "px"
	} else {
			circle.style.width = 40 + "px"
			circle.style.height = 40 + "px"
	}


})

document.querySelector("#remove button").addEventListener('click', function() {

var hidaElements = document.querySelector(".inactive")
    hidaElements.remove()

})


document.querySelector("#reverse-squares button").addEventListener('click', function() {
    // TASK #6
})

document.querySelector("#pig-latin button").addEventListener('click', function() {
    // TASK #7
})

document.querySelector("#cycle-image button").addEventListener('click', function() {
    // TASK #8
})
