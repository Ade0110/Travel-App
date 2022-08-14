const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const express = require('express')
const app = express()
// const mockAPIResponse = require('./mockAPI.js')
const bodyParser = require('body-parser');

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());



app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8000, function () {
    console.log('Example app listening on port 8000!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

// POST method route
app.get('/all', sendData);


function sendData (request, response) {
  response.send(projectData);
};

// POST method route
app.post('/addData', addData);

function addData(req,res){
  console.log(req.body)
projectData['city'] = req.body.city;
projectData['lat'] = req.body.lat;
projectData['lng'] = req.body.lng;
projectData[temp]=req.body.temp;


res.send(projectData);
// console.log("The data pushed is "+newData)
}

module.exports = app;