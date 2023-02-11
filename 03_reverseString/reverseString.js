const reverseString = (string) => {
  // takes the string argument
  // splits each charachter in a new array without spaces
  // Reverses items from the new array. 
  // Joins the reversed array back into a string and separates them by no space, but can include space as an array item
  return string.split("").reverse().join("");
  
};

// Do not edit below this line
module.exports = reverseString;
