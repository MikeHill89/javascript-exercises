const removeFromArray = function(array,...items) {
  
  return array.filter(x => !items.includes(x)); 
  
};

// Do not edit below this line
module.exports = removeFromArray;
