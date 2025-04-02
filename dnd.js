//Step 1: Get Data Back from API
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
    let choice = document.querySelector('input').value
    // let choiceCap = choice.replace(/^./, char => char.toUpperCase())
    // choice = choiceCap
    // console.log(choiceCap)
    const url = `https://www.dnd5eapi.co/api/2014/spells/${choice}`

    fetch(url)
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            document.querySelector('h1').innerText = `${choice}`
            document.querySelector('h3').innerText = data.classes[0].name
            console.log(data.subclasses)
            data.subclasses.forEach( obj => {
                //Step 2: Console.Log the subclasses
                console.log(obj.name)
                //Step 3: Get the subclasses in to the DOM
                const li = document.createElement('li')
                li.textContent = obj.name
                document.querySelector('ul').appendChild(li)
            });
            
            document.querySelector('p').innerText = data.desc
        })
        .catch(err => {
            console.log(`error ${err}`)
        })
}

