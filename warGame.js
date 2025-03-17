//Get a deck of cards

let deckID = ''

fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
.then(res => res.json())
.then(data => {
    // console.log(data)
    // localStorage.setItem('deckID', data.deck_id)
    // console.log(data)
    deckID = data.deck_id
})
.catch(err => {
    console.log(`error ${err}`)
})

document.querySelector('button').addEventListener('click', draw)

//Draw Cards
function draw(){
    const url = `https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=2`
    fetch(url)
    .then(res => res.json())
    .then(data =>{
        console.log(data)
        document.querySelector('#player1').src = data.cards[0].image
        document.querySelector('#player2').src = data.cards[1].image
 
        let val1 = cardValue(data.cards[0].value)
        let val2 = cardValue(data.cards[1].value)

        // if(Number(data.cards[0].value > data.cards[1].value)){
        //     document.querySelector('h3').innerText = "Player 1 is the winner!"
        // }else if(Number(data.cards[0].value < data.cards[1].value)){
        //     document.querySelector('h3').innerText = "Player 2 is the winner!"
        // }else if(Number(data.cards[0].value === data.cards[1].value)){
        //     document.querySelector('h3').innerText = "It's a tie!!"
        // }
        if(Number(val1 > val2)){
            document.querySelector('h3').innerText = "Player 1 is the winner!"
        }else if(val1 < val2){
            document.querySelector('h3').innerText = "Player 2 is the winner!"
        }else if(Number(val1 === val2)){
            document.querySelector('h3').innerText = "It's a tie!!"
        }
    })
        .catch(err => {
            console.log(`error ${err}`)
        })
}

function cardValue(val){
    if(val === "ACE"){
        return 14
    }else if(val === "KING"){
        return 13
    }else if(val === "QUEEN"){
        return 12
    }else if(val === "JACK"){
        return 11
    }else if(val === '10'){
        return 10
    }else{
        return val
    }
}