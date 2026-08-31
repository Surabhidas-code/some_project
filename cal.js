// clock = new Date();
// let clock = hours + ":" + minutes + ":" + seconds;
let ampm = document.querySelector(".ampm");
let  hours = document.querySelector(".hours");
let  minutes = document.querySelector(".minutes");
let  seconds = document.querySelector(".seconds");
function digital(){
    let clock = new Date();
    let hour = clock.getHours();
    let ampm = hour >= 12 ? "PM" : "AM";
    // let clock = new Date();
    hours.innerHTML = clock.getHours();
    minutes.innerHTML = clock.getMinutes();
    seconds.innerHTML = clock.getSeconds();
}
// setInterval(digital,1000);
digital();
setInterval(digital,1000);
