// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');
const app = express()

const bodyParser = require('body-parser')

// Start up an instance of app

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 8888;



app.listen(port, () => {
    console.log(`listining to ${port}`)
    console.log(`server is running on http://localhost:${port}`)
})


app.post('/insertData',(req, res)=> {
    projectData.temp = req.body.temp;
    projectData.date = req.body.date;
    projectData.userResponce = req.body.feelings;
})

app.get('/allData', (req, res)=> {
    res.send(projectData);
})