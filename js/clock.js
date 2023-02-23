const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const Minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");

    clock.innerText = `${hours}:${Minutes}:${seconds}`;
    //`${date.something()}:`
    
}

getClock(); //when we open the website instantly show the tme
setInterval(getClock, 1000);
//setInterval == this is instatly comeout

