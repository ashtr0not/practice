//Come up with a parent class
class Agency{
    constructor(name,age,language,payRate){
        this._name = name
        this._age = age
        this.language = language
        this.payRate = payRate
    }
    get name(){
        return this._name
    }
    get age(){
        return this._age
    } 
    code(){
        console.log(`${this._name} knows how to code in ${this.language}!`)
    }
    types(){
        console.log(`${this._name} is typing valuable code!`)
    }

}
//extend that parent class into 2 children
class FrontEndDev extends Agency{
    constructor(name,age,language,payRate){
        super(name,age,language,payRate)
    }
    design(){
        console.log(`${this._name} designs using ${this.language}`)
    }
    code(){
        super.code()
        console.log(`${this._name} is coding in the front end`)
    }
    
}

class BackEndDev extends Agency{
    constructor(name,age,language,payRate){
        super(name,age,language,payRate)
    }
    build(){
        console.log(`${this._name} builds servers using ${this.language}`)
    }
    code(){
        console.log(`${this._name} is coding in the back end`)
    }
}
//Use Encapsulation, abstraction, inheritance and polymorphism x

let ash = new FrontEndDev('Ash', 29, 'JavaScript', 107000)
let leon = new BackEndDev('Leon', 30, 'Python', 115000)
let mike = new FrontEndDev('Mike', 35, 'CSS', 97000)

let coders = [ash,leon,mike]

for(a of coders){
    a.code()
}