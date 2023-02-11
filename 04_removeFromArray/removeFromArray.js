const removeFromArray = function(array, item) {
  
  const itemIndex = array.indexOf(item);
  array.splice(itemIndex,1);
  return array;
  
};

// Do not edit below this line
module.exports = removeFromArray;
