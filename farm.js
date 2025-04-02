class Animal{
    constructor(name,age,breed){
        this._name = name
        this._age = age
        this.breed = breed
    }
    get name(){
        return this._name
    }
    get age(){
        return this._age
    }
    speak(){
        console.log(`This ${this.breed} named ${this._name} is speaking`)
    }
}
class Dog extends Animal{
    constructor(name,age,breed){
        super(name,age,breed)
    }
    wagsTail(){
        console.log(`${this._name} is wagging `)
    }  
}

class Cat extends Animal {
    constructor(name,age,breed,sound){
        super(name,age, breed)
        this.sound = sound
    }
    sleep(){
        console.log(`${this._name} is sleeping ${this.sound}`)
    }

}

let kaleo = new Dog('kaleo', .8, 'MinPin')
let kati = new Cat('kati', 2,'calico','quietly')