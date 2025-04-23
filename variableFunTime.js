// Create a variable and assign in a boolean

// var bool = true

//Create a variable and assign in a string that is a number

var strnum = "105"

// add 10 to that number 

// strnum = Number(strnum) + 10
// console.log(strnum)

// create a variable that holds a value from the input 

// document.querySelector('#numClick').addEventListener('click', clickMe)

// function clickMe(){
//     var num = Number(document.querySelector('#num').value)

//     num = num + 21

//     alert(Number(num))
// }

//create a variable that holds the h1

var h1Tag = document.querySelector('h1')

//add an event listener to that element that places the prudcut of the 2 previous 
h1Tag.addEventListener('click', tag)

function tag(){
    document.querySelector('h2').innerText = strnum * strnum
}