const express = require('express')
const app = express() //this gives us access to all the functions that comes with express 
const PORT = 8000

let workout = {
    muscleGroup : 'bicep',
    exercises : ['Bicep Curl', 'Pull-up', 'Chin-up', 'Concentration curl', 'Bent-over row'],
    description : 'Biceps are the large muscles located in your upper arm, extending from the shoulder to just above the elbow'
}

app.get('/', (request, response) => { // the '/' is where the home page or root is loaded. Once this is ran, a call back function is called(request, response)
    response.sendFile(__dirname + '/index.html') // once the get function is ran, we want to respond with some HTML and it looks for the HTML wherever the server file is located
}) // get takes in two values 

app.get('/api/workout', (request,response) => {
    response.json(workout)
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})//another method that comes with Express