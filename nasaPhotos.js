
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
    let val = document.querySelector('input').value
    const url = 'https://api.nasa.gov/planetary/apod?api_key=hTViEQ2HjUMsCtBzJmLbobudlbrHvlUwoT33Inrb&date='+val
    
fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector('h1').innerText = data.title
        if(data.media_type === "image"){
            document.querySelector('img').src = data.hdurl
        }else if(data.media_type === "video"){
            document.querySelector('iframe').src = data.url
        }   
        document.querySelector('p').innerText = data.explanation
    })
    .catch(err => {
        console.log(`error ${err}`)
    }
    )
}