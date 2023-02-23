const API_KEY = "9749523a31ece0a34c47c14c0f780ea2";

function onGeook(position){
    const lat =position.coords.latitude;;
    const lng =position.coords.longitude;
    
console.log("you live it", lat, lng);
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
fetch(url).then(response => response.json()).then(data => { 
    const weatherContainer = document.querySelector("#weather span:first-child");
    const city = document.querySelector("#weather span:last-child");
    city.innerText =data.name; 
    weather.innerText = `${data.weather[0].main} / ${data.main.temp} `;
});
}
function onGeoError(){
    alert("cant find you. ");

}

navigator.geolocation.getCurrentPosition(onGeook,onGeoError);
