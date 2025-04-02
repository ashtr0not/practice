class EspressoMachine{
    constructor(brand,maxDrinks,maxCupSize,color){
        this.brand = brand
        this.drinks = maxDrinks
        this.size = maxCupSize
        this.color = color
    }
    machineOn(){
        console.log('Machine is on')
    }
    machineOff(){
        console.log('Machine is off')
    }
    addCoffe(){
        console.log('Need to add coffee')
    }
}
let matcha = new EspressoMachine('Sony','15','16', 'black')