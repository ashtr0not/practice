//Create a class and extend it

class Vehicle{
    constructor(wheels,doors,color,topSpeed, name){
        this.wheels = wheels 
        this.doors = doors
        this.color = color
        this.speed = topSpeed
        this._name = name // an
    }
    vehicleOn(){
        console.log('Vehicle is turning on')
    }
    vehicleOff(){
        console.log('Vehicle is turning off')
    }
    get name(){ //This getter property ensures name will alwaus return name
        return this._name
    }
    
}

class Motorcycle extends Vehicle{
    constructor(wheels,doors,color,topSpeed,brand){
        super(wheels,doors,color,topSpeed,brand)
        this.brand = brand 
    }
}

let suzuki = new Motorcycle(4,0,'black', 200, 'suzuki', 'kalea')

suzuki.name // kalea

suzuki.name = 'other name' //this will not change the name to 'other name'

