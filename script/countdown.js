const day = document.getElementById("day");
const hour = document.getElementById("hour");
const min = document.getElementById("min");
const sec = document.getElementById("sec");

function countdown() {
  const now = new Date();
  const goal = new Date(2023,7,27);
  const diff = goal.getTime() - now.getTime();

  const calcDay = Math.floor(diff / 1000 / 60 / 60 / 24);
  const calcHour = Math.floor(diff / 1000 / 60 / 60) % 24;
  const calcMin = Math.floor(diff / 1000 / 60) % 60;  
  const calcSec = Math.floor(diff / 1000) % 60;

  day.innerHTML = calcDay < 10 ? '0' + calcDay : calcDay;
  hour.innerHTML = calcHour < 10 ? '0' + calcHour : calcHour;
  min.innerHTML = calcMin < 10 ? '0' + calcMin : calcMin;
  sec.innerHTML = calcSec < 10 ? '0' + calcSec : calcSec;
}
countdown();
setInterval(countdown,1000);