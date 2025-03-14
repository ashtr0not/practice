//Create a Netflix TV show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods

class Netflix{
    constructor(showCharacter, showSetting, showLength, showGenre){
        this.character = showCharacter
        this.setting = showSetting
        this.length = showLength
        this.genre = showGenre
    }
    chooseShow(){
        console.log("You chose a show")
    }
    exit(){
        console.log("You have exited the show")
    }
}