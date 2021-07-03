/* Global Variables */
const mainUrl = 'http://maps.openweathermap.org/maps/2.0/weather/{op}/{z}/{x}/{y}?appid=';
const keyOfApi = '445436be98130e77899a3431598b8e6d';
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();


let clicker = document.getElementById('generate');


clicker.addEventListener('click', handelButtonGenrate)

function handelButtonGenrate() {
    if (!zipcode.value) {
        return nice
    } else {
        alert('please enter a zip code')
    }
}
