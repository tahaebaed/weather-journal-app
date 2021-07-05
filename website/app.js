/*------------------- Global Variables and Personal API Key for OpenWeatherMap API ---------------------- */
const zipCode = document.getElementById('zip');
const feelingInput = document.getElementById('feelings');
// make a variable for the pai key
const apiKey = '&appid=445436be98130e77899a3431598b8e6d&units=metric'; // 

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + 1 + '.' + d.getDate() + '.' + d.getFullYear();



/* ---------------------------------------------------------------------------------------------------------------*/
/*---------------------add click Event listener to add function to existing HTML DOM element ---------------------*/

let clicker = document.getElementById('generate');


clicker.addEventListener('click', function handleGenBtnClick() {
    if (!zipCode.value) {
        alert('Please Enter The Zip Code!!')
    } else {
        getData().then(data => postData('/insertData',
        {
            temp: data.main.temp,
            date: newDate,
            feelings: feelings.value
        })
        )
    // .then(updateUI())
    }
})

/* ------------------------------------------------------------------------------------------------------*/
/*--------------------------- get data with the Async func with the api ur ------------------------------*/

const apiUrl = `http://api.openweathermap.org/data/2.5/weather?zip=`;

const getData = async () => {
    const request = await fetch(`${apiUrl}${zipCode.value}${apiKey}`); // gettting the data from the api
    try {
        return await request.json();
    } catch (error) {
        console.log('we cant get data', error);
    }
}

/* ------------------------------------------------------------------------------------------------------*/
/*------- post data with the Async func with the local host route url localhost:8888/insertData --------*/

const postData = async (url = '/insertData', data = {}) => {
    await fetch(url, //To post data to the route url from what we get from the api
    {
        "method": 'POST',
        "credentials": "same-origin",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }).then(updateUI());
    try {
        return;
    } catch (error) {
        console.log(`we can't post anything`, error)
    }
}
/* -------------------------------------------------------------------------------------------------------------*/
/*------- update the ui in with innerHTML with updateui asyunc func to add the result from the request --------*/

const selectDate = document.getElementById('date');
const selectTemp = document.getElementById('temp');
const selectContent = document.getElementById('content');


const updateUI = async () => {
    const request = await fetch('/allData');
    try {
        const allData = await request.json()
        selectDate.innerHTML = `today is: ${allData.date}`;
        selectTemp.innerHTML = `the temprture today is: ${allData.temp}&#176;`;
        selectContent.innerHTML = `today i'm feel: ${feelings.value}`;
    } catch (error) {
        console.log(`couldn't update`, error)
    }
}

/* -------------------------------------------------------------------------------------------------------------*/