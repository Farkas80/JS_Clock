function setDate (sec, min, hour, timeZone) {
    const now = new Date();
    const actualDate = new Date(now.valueOf() + now.getTimezoneOffset() - timeZone * 60000);
    const secondValue = document.querySelector(sec);
    const minuteValue = document.querySelector(min);
    const hourValue = document.querySelector(hour);

    /*const seconds = actualDate.getSeconds();*/
    const secondsDegrees = ((actualDate.getSeconds() / 60) * 360) + 90;    
    secondValue.style.transform = `rotate(${secondsDegrees}deg)`;

    /*const minutes = actualDate.getMinutes();*/
    const minutesDegrees = ((actualDate.getMinutes() / 60) * 360) + 90;
    minuteValue.style.transform = `rotate(${minutesDegrees}deg)`;

    /*const hours = actualDate.getHours();*/
    const hoursDegrees = ((actualDate.getHours() / 12) * 360) + 90; 
    hourValue.style.transform = `rotate(${hoursDegrees}deg)`;
}

/*setInterval( function() { setDate('.second-hand', '.minute-hand', '.hour-hand', -60); } , 1000);
setInterval( function() { setDate('.second-hand1', '.minute-hand1', '.hour-hand1', -120); } , 1000);
setInterval( function() { setDate('.second-hand2', '.minute-hand2', '.hour-hand2', -180); } , 1000);*/

setInterval( function() { 
    setDate('.second-hand', '.minute-hand', '.hour-hand', -60);
    setDate('.second-hand1', '.minute-hand1', '.hour-hand1', -120);
    setDate('.second-hand2', '.minute-hand2', '.hour-hand2', -180);
} , 1000);
