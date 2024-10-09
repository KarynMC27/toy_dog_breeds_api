const express = require(`express`)
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const dogs = {
    'affenpinsher': {
    'name': "Affenpinscher",
    'height': "9-11.5 inches",
    'weight': "7-10 pounds",
    'origin_regions': ['Germany'],
    'reputation': "difficult",
},

'chihuahua': {
    'name': "Chihuahua",
    'height': "5-8 inches",
    'weight': "under 6 pounds",
    'origin_regions': ['Mexico'],
    'reputation': "feisty",
},

'papillon': {
    'name': "Papillon",
    'height': "8-11 inches",
    'weight': "5-10 pounds",
    'origin_regions': ['France', 'Belgium', 'Spain'],
    'reputation': "happy",
},

'russian toy': {
    'name': "Russian Toy",
    'height': "8-11 inches",
    'weight': "under 6.5 pounds",
    'origin_regions': ['Russia'],
    'reputation': "outgoing",
},

'unknown': {
    'name': "unknown",
    'height': "unknown",
    'weight': "unknown",
    'origin_regions': [''],
    'reputation': "unknown",
},

}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    let breedName = request.params.name.toLowerCase()

    if(dogs[breedName]) {
        response.json(dogs[breedName])
    } else
    response.json(dogs['unknown'])
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`the server is on ${PORT}`)
})