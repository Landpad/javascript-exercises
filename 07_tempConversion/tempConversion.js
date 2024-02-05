const convertToCelsius = function(temperature) {
  let celcius = (temperature - 32) * (5/9);
  celcius = Math.round(celcius * 10)  / 10;
  return celcius;
};

const convertToFahrenheit = function(temperature) {
  let farenheit = (temperature * (9/5)) + 32;
  farenheit = Math.round(farenheit * 10) / 10;
  return farenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
