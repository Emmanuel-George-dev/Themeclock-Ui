const toggle = document.querySelector(".theme-toggle");
const moon = document.querySelector(".moon");
const sun = document.querySelector(".sun");
const body = document.body;
const hourEl = document.querySelector(".hour");
const secondsEl = document.querySelector(".seconds");
const minuteEl = document.querySelector(".minute");
const monthEl = document.querySelector(".month");
const dayEl = document.querySelector(".day");
const weekEl = document.querySelector(".week");
const yearEl = document.querySelector(".year");
const digitalHour = document.querySelector(".digital-hour");
const digitalMinute = document.querySelector(".digital-minute");
const ampm = document.querySelector(".ampm");
toggle.addEventListener("click", changeTheme);

function changeTheme() {
  body.classList.toggle("dark-theme");
  if (body.classList.contains("dark-theme")) {
    moon.style.display = "none";
    sun.style.display = "block";
  } else if (body.classList.contains("dark-theme") === false) {
    sun.style.display = "none";
    moon.style.display = "block";
  }
}

function setTime() {
  let time = new Date();
  let hour = time.getHours();
  let seconds = time.getSeconds();
  let minute = time.getMinutes();
  let day = time.getDay();
  let date = time.getDate();
  let month = time.getMonth();
  let year = time.getFullYear();

  // calculate hour, minute, second rotation for analog clock
  const calc_hour = hour * 30 + minute / 2;
  const calc_minute = minute * 6 + seconds / 10;
  const calc_seconds = seconds * 6;

  hourEl.style.transform = `rotate(${calc_hour}deg)`;
  minuteEl.style.transform = `rotate(${calc_minute}deg)`;
  secondsEl.style.transform = `rotate(${calc_seconds}deg)`;

  let months = [
    "Jan,",
    "Feb,",
    "Mar,",
    "Apr,",
    "May,",
    "Jun,",
    "Jul,",
    "Aug,",
    "Sep,",
    "Oct,",
    "Nov,",
    "Dec,",
  ];
  let week = ["Sun,", "Mon,", "Tues,", "Wed,", "Thurs,", "Fri,", "Sat,"];

  // We changed hours from 24hrs to 12hrs and check if it's AM or PM
  if (hour >= 12) {
    hour = hour - 12;
    ampm.innerText = "PM";
  } else {
    ampm.innerText = "AM";
  }

  // Show a zero before hours
  if (hour < 10) {
    digitalHour.innerText = `0${hour}`;
  } else digitalHour.innerText = hour;

  // if time is 00 show 12
  if (hour === Number("00")) {
    digitalHour.innerText = "12";
  }
  // Show a zero before minutes
  if (minute < 10) {
    digitalMinute.innerText = `0${minute}`;
  } else {
    digitalMinute.innerText = minute;
  }

  // Show year, date, month
  yearEl.innerText = year;
  dayEl.innerText = date;
  monthEl.innerText = months[month];
  weekEl.innerText = week[day];
}

setInterval(() => {
  setTime();
}, 1000);
