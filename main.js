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


var hidaElements = document.querySelector(".answer-box ul")
var inactive_List_hidaElements = document.querySelector('.answer-box ul')
var hide_Elements = hidaElements.querySelectorAll('li')

var remover = function(element_To_Search) {
  console.log(element_To_Search.classList)
  for (var i = 0; i < element_To_Search.classList.length; i ++) {
    if (element_To_Search.classList[i] === "inactive") {
      return true
    }
  }
  return false
}


for (var i = 0; i < hide_Elements.length; i ++) {
  var element_Node = hide_Elements[i]
  if (remover(element_Node)) {
    hidaElements.removeChild(element_Node)
  }
}

})


document.querySelector("#reverse-squares button").addEventListener('click', function() {

var parent = document.querySelector("#reverse-squares .answer-box")
var box = parent.querySelectorAll(".square")
for (var i = box.length-1; i >= 0; i--) {
    parent.removeChild(box[i])
    parent.appendChild(box[i])
}




})

document.querySelector("#pig-latin button").addEventListener('click', function() {

    var pig_Latin_Parent = document.querySelector(".exercise-container#pig-latin")
    
    var lil_Pigs = pig_Latin_Parent.querySelectorAll("#tasks li")
    
    console.log("--An 'array' of HTML-DOM objects --")
    console.log(lil_Pigs)
    console.log('---------------------')
    // console.log(lil_Pigs)
    window.plp = pig_Latin_Parent
    
    for (var i = 0; i < lil_Pigs.length; i++) {


        console.log([lil_Pigs[i]])
        lil_Pigs[i].textContent = lil_Pigs[i].textContent.split('').reverse().join('')

    }
        




})

document.querySelector("#cycle-image button").addEventListener('click', function() {



var alpha = 3

alpha.iterator


var img_City = document.querySelector("#city-img.exerciseItem")

var imgArray = img_City.src.split("/")
// console.log(imgArray)
var numString = imgArray.pop()
console.log(numString)
var newNum = parseInt(numString) + 1
imgArray.push(newNum)
var newImgUrl = imgArray.join('/')

img_City.src=newImgUrl






    // var alphalet = "abcdefghijk"
    // var running_Total


    // for (var i = 1; i < alphalet[i].length; i++) {
    //     var nums = [i]
    // } 
    // running_Total += nums
    // numeral = parseInt(running_Total)
    // console.log(numeral)
    // console.log(typeof numeral)


// <img id="city-img" class="exerciseItem" src="http://lorempixel.com/400/200/city/1">






                                // // Apennd Child //
//     var image_Element = document.createElement("img")
    
//     image_Element.className += ' imageEl'
    
//     var image_Parent = document.querySelector("#cycle-image")
    
//     image_Parent.appendChild.Image_Element


                                // remove and append child//
// var image_Parent = document.querySelector("#cycle-image")





                                    // // innerHTML //
// var image_Parent = document.querySelector("#cycle-image")
//  image.src = "http://lorempixel.com/400/200/city/number">

})


