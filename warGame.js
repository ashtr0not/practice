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
    })
        .catch(err => {
            console.log(`error ${err}`)
        })
}