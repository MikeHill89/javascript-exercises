const convertToCelsius = function(tempInFahrenheit) {
    let celsius;
    celsius = (tempInFahrenheit -32) * 5 / 9;
    return Math.round(celsius * 10) / 10;

    
};

const convertToFahrenheit = function(tempInCelsius) {
    
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
