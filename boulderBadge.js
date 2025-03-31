// Get 3 Pokemon on your team that have evolved at least once

//Create 3 variables to sotre the number of rare candies each of 
//your pokemon would need to evolve. Rare candies increase your level by 1

let bulbasaur = 16 - 5
let caterpie = 7 - 1
let weedle = 7 - 1
//create a fourth vairable name totalCandies that sums all the rare candies you would need
let totalCandies = bulbasaur + caterpie + weedle

console.log(`You will need ${totalCandies} total rare candies for all to evolve`)

//You have a charmander in your party
//charmander can only battle if the temp is above zero degress celcius
//create a function that converts a farenheit value to celcius 
function temp(farenheit){
    // let farenheit
    let celcius = (farenheit - 32) * (5/9)
    if(celcius >= 0 ){
        fight()
        // console.log("CHARMANDER CAN FIGHT")
    }else{
        console.log("Little fire guy aint ready")
    }
}
temp(20)

//create another function that tells you whether charmander can battle or not
function fight(){
    console.log("CHARMANDER CAN FIGHT")
}

//Print to the console "Pikachu i choe you" x times
//x is the number of pokemon the trainer you are battling has in their party
function battle(numOfPokemon){
    for(let i = 0; i < numOfPokemon; i++){
        console.log("Pikachu! I CHOOSE YOU")
        document.querySelector('h1'). innerText += "Pikachu! I CHOOSE YOU"
    }
}
battle(25)