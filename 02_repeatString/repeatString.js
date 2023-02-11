const repeatString = (string, num) => {

  let finalString = '';
  if ( num < 0 ) {
    finalString = "ERROR";
    } else if ( num > 0){
    
    for (let i = 0; i < num;i++) { 
    finalString += string;
    
    }
  }
  return finalString;
}
// Do not edit below this line
module.exports = repeatString;
