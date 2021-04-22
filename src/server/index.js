//var path = require('path')
const dotenv = require('dotenv');
dotenv.config();
const express = require('express')
const cors = require('cors')
const axios = require('axios')
//const mockAPIResponse = require('./mockAPI.js')

const port=8080

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static('dist'))

app.post('/runner',async function(req,res){
    const{url} =req.params;
    const response = await axios.get(`https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&url=${url}&lang=en`)
    res.send()

})




app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
