const secondsDiv = document.getElementById("second");
const minutesDiv = document.getElementById("minute");
const hoursDiv = document.getElementById("hour");

setInterval(updateClock, 1000);

function updateClock() {
  let date = new Date();
  let sec = date.getSeconds() / 60;
  let min = (date.getMinutes() + sec) / 60;
  let hour = (date.getHours() + min) / 12;

  secondsDiv.style.transform = "rotate(" + sec * 360 + "deg)";
  minutesDiv.style.transform = "rotate(" + min * 360 + "deg)";
  hoursDiv.style.transform = "rotate(" + hour * 360 + "deg)";
}

updateClock();
