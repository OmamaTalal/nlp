var path = require('path');
const express = require('express');

const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var cors = require('cors');
app.use(cors());

const fetch = require('node-fetch');

app.use(express.static('dist'));


require('dotenv').config();

const key = process.env.API_KEY;
const baseUrl = process.env.API_URL;
sentimentData = {};
console.log(__dirname);

console.log(`Your API key is ${process.env.API_KEY}`);


// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
});

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile('dist/index.html');
});


app.post('/nlp', getAPI);


async function getAPI(req, res) {

    let url = req.body.url;
    const link = `https://api.meaningcloud.com/sentiment-2.1?key=${key}&url=${url}&lang=auto`;
    console.log( link);

    const response = await fetch(link);
    apiData = {};
    try { // try to handle error if there any
            apiData = await response.json();
           // console.log("res .json :",apiData);
            sentimentData = {
                "agreement": apiData.agreement,
                "subjectivity": apiData.subjectivity,
                "confidence": apiData.confidence,
                "irony": apiData.irony
            };
            console.log("data :: " , sentimentData);
           
    }
    catch(error) {
            console.log("can't handle request error:", error); //print the handled error 
    }
    res.send(sentimentData);
}


app.get('/data', function (req, res) {
    res.send(sentimentData);
});