const express = require('express') 
const app = express() //this gives us access to all the functions that comes with express 
const cors = require('cors') // This is a cors module that gets rid of an cors errors for us
const PORT = 8000

app.use(cors())

let workout = { //AKA Express API
    'arm': { // This is my own API I had created. This API can be seen in post man under localhost:8000/api/workout 
        muscleGroup : ['bicep', ' forearm', ' triceps'],
        exercise : ['Bicep Curl', 'Pull-up', 'Chin-up', 'Concentration curl', 'Bent-over row'],
        description : 'Biceps are the large muscles located in your upper arm, extending from the shoulder to just above the elbow'
    },
    'leg': {
        muscleGroup : ['quads', 'calves', 'hamstrings'],
        exercise : ['Leg Extensions', 'Calf Raises', 'Squats'],
        description : 'The quads are a group of five muscles located in your upper leg at the fron of your thigh.'
    },'unknown': {
        muscleGroup : ['unknown','unknown'],
        exercise : 'unknownwww',
        description : 'I am unknown'
    }
}


app.get('/', (request, response) => { // the '/' is where the home page or root is loaded. Once this is ran, a call back function is called(request, response)
    response.sendFile(__dirname + '/index.html') // once the get function is ran, we want to respond with some HTML and it looks for the HTML wherever the server file is located
}) // get takes in two values 

app.get('/api/workout/:bodyPart', (request,response) => {
    const bodyPart = request.params.bodyPart.toLowerCase() // request: look at the request params: look at the parameter bodyPart bodyPart: grab the parameter in the URL toLowerCase(): gets rid of case sensitivity 
    if(workout[bodyPart]){ // if conditional to default to unknown if name isn't found 
    response.json(workout[bodyPart]) // pulling from const bodyPart above in line 31
    //localhost:8000/api/workout/arm  will pull from the arm object in the API above 
    }else{
        response.json(workout['unknown']) // this defaults to unknown the the query parameter isnt met 
    }
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})//another method that comes with Express