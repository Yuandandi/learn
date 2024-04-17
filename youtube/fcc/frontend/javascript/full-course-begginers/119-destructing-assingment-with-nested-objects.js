// destructing assginment to assign variables from nested objects

const local_forecast = {
  today: { min: 72, max: 83},
  tomorrow: { min: 73.3, max: 84.6},
};

function getMaxOfTomrw(forecast) {
  "use strict";
  const { tomorrow: { max : maxofTomorow }} = local_forecast; // nested object needs to be inside a curly bracket again
  return maxofTomorow;
};

console.log(getMaxOfTomrw(local_forecast));
