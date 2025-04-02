//GOAL: Get a book back and place book in to local storage
// localStorage.clear()
//Add an event listener to run function
document.querySelector('button').addEventListener('click', getFetch)

//add function to get the API
function getFetch(){
    let choice = document.querySelector('input').value
    const url = `https://openlibrary.org/isbn/${choice}.json`
    fetch(url)
    .then(res => res.json())
    .then(data => {
        // localStorage.setItem('title', title)
        let title = data.title
        if(!localStorage.getItem('books')){
            localStorage.setItem('books', title)
        }else{
            let books = localStorage.getItem('books') + ' , ' + title
            localStorage.setItem('books', books)
        }
        console.log(title)
        document.querySelector('h2').innerText = title

        })
        .catch(err => {
            console.log(`error ${err}`)
        })
}