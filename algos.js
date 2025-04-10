//create a variable and alert log the value

let val = 6
alert(val)

//create a variable, and add -15 to it, and print the value to the console

val = val + (-15)
console.log(val)

//create a function that multiplies four numbers and alerts the product

function multiply(n1,n2,n3,n4){
    alert(n1*n2*n3*n4)
}
multiply(1,2,3,4)

//create a function that divides one number by another and returns the remainer + 10

function division(n1,n2){
    console.log((n1%n2)+10)
}
division(10,4)



//create a function that divides five numbers and if the quotient is
//divisible by 5 alert LINCOLN

function lincoln(n1,n2,n3,n4,n5){
    let divides = n1 / n2 / n3 / n4 / n5

    if(divides % 5 === 0){
        alert('LINCOLN')
    }
}
lincoln(100,50,25,5,1)


//create a function that takes in a word and a number.
//colsole log the word x cubed times where x was the number passed in

function numberAndWords(word, num){
    for(let i = 0; i < num; i++){
        console.log(word)
    }

}
numberAndWords('Dev', 50)

