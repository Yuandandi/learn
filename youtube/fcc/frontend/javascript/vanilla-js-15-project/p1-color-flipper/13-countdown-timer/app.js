const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4'); // querySelectorAll will return node list of each 4h value

// let currentDate = new Date(); // return the current date
// let futureDate = new Date(2024,10,25, 11, 30, 0); // JavaScript is 0 index so the month 10 is actually the month of 11th which is November, hardcoded

// make It soft coded;
let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();
// months are ZERO index based;
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);

// console.log(tempDate)
// console.log(tempYear)
// console.log(tempMonth)
// console.log(tempDay)

const year = futureDate.getFullYear(); // return the year only
const hours = futureDate.getHours(); // return the hours only
const minutes = futureDate.getMinutes(); // return the minutes only

let month = futureDate.getMonth(); // will return 10 but remember the 10 means the 11th month because 0 indexing in JavaScript
month = months[month]; // You can set It to variable too
const weekday = weekdays[futureDate.getDay()]; // will return the name of the day, in this case monday which is index of 1
const date = futureDate.getDate();
giveaway.textContent = `giveaway ends on ${weekday} ${date} ${month} ${year} ${hours}:${minutes}am`;
// console.log(month);
// console.log(months[month]); // return the month name with indexing November
// const weekday = futureDate.getDay() // retun value 0-6 (7 days start from Sunday), in this case 1
// console.log(weekday);



// future in milliseconds;
const futureTime = futureDate.getTime();
function getRemainingTime() {
  const today = new Date().getTime(); // the time that has been collapsed since "epoch" time in January 1st 1970, the value in the milliseconds form
  // console.log(today);
  const t = futureTime - today;
  // console.log(t); // It keeps decreasing, because It will get closer to the giveaway days
  // 1s = 1000ms;
  // 1m = 60s;
  // 1hr = 50min;
  // 1d = 24hr;

  // values in ms;
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  // calculate all values;
  let days = t / oneDay;
  days = Math.floor(days); // the days left in decimals get the days in the round down
  let hours = Math.floor((t % oneDay) / oneHour); // Using % modulus operand because we already get the date counter, so we need to add the hours left
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  // set values arrays;
  const values = [days, hours, minutes, seconds];

  // giving number 0 infront of the number that less than 10;
  function format(item) { 
    if (item < 10) {
      return item = `0${item}`;
    };
    return item;
  }

  items.forEach(function(item, index) { // iterating over the item
    item.innerHTML = format(values[index]); // nicely done with indexing rather than You place in one by one
  });
  // if the current time is bigger than future time
  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired</h4>`; // chnge the value of countdown with this text
  };
};

// countdown
let countdown = setInterval(getRemainingTime, 1000); // 1000ms is 1 seconds so It will change every 1 seconds

getRemainingTime();

