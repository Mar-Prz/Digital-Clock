setInterval(setHours, 1000)
setInterval(setMinutes, 1000)
setInterval(setSeconds, 1000)
setInterval(setAmPm, 1000)

function setHours() {
let time = new Date () 
let hours = time.getHours()
if(hours>12) {
    hours = hours - 12;}
    if(hours == 0) {
        hours = 12;}
        if(hours < 10) {
            hours = "0" + hours;
        }

const currentHours = document.getElementById("hours");
currentHours.innerText = hours 

}

function setMinutes() {
    let time = new Date ()
    let minutes = time.getMinutes()
    if(minutes < 10) {
        minutes = "0" + minutes;
    }
    const currentMinutes = document.getElementById("minutes");
    currentMinutes.innerText = minutes
}

function setSeconds() {
    let time = new Date ()
    let seconds = time.getSeconds()
    if(seconds < 10) {
        seconds = "0" + seconds;
    }
    const currentSeconds = document.getElementById("seconds");
    currentSeconds.innerText = seconds
}

function setAmPm () {
    let time = new Date () 
    let hours = time.getHours()
    let ampm = "AM"

    if(hours > 12){
        ampm = "PM"
    }

    
    const currentAmPm = document.getElementById("ampm");
    currentAmPm.innerText = ampm
}

setHours()
setMinutes()
setSeconds()
setAmPm()