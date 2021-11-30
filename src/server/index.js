const path = require('path')
const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const fetch = require('node-fetch')
const app = express()

app.use(express.static('dist'))
app.use(cors())

const port = 8081

dotenv.config()
const apiKey = process.env.API_KEY

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))

})

// designates what port the app will listen to for incoming requests
app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`)
})


app.get('/sentiment-analysis', (req, res) => {
    const { url } = req.query

    try {
        fetch(`https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}&url=${url}&lang=en`)
        .then(response => response.json())
        .then(({ agreement, subjectivity, confidence, irony }) => res.send({agreement, subjectivity, confidence, irony}))
    } catch(error) {
        console.log('can\'t fetch data from API', data)
    }
})


app.get("/test", (req, res) => {
    res.send(mockAPIResponse);
});