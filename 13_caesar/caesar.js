const caesar = function (string, shiftfactor) {
  // take the string and split it into an array of characters
  const splitString = string.split("");
  // used to check if an index position of splitString matches a characters
  // of the alphabet.
  const alphabetRange = /[a-zA-Z]/;

  // loops over the length of the splitString array
  for (let index = 0; index < splitString.length; index++) {
    //get the charcode of the character at the index position
    const charCode = splitString[index].charCodeAt();
    //test if character at the index is part of the alphabet. If true then
    //shift the the charactercode at the index position by the shift factor.
    if (alphabetRange.test(splitString[index])) {
      let shiftedCharCode;
      //checks if the charCode at the index is lowercase.
      if (charCode >= 65 && charCode <= 90) {
        shiftedCharCode = ((charCode + shiftfactor - 65) % 26) + 65;
        //checks if the shiftfactor caused the charGoes to go out of
        //alphabetical bounds.
        if (shiftedCharCode < 65 || shiftedCharCode > 90) {
          shiftedCharCode += 26;
        } //checks if the charCode at the index is upperCase
      } else if (charCode >= 97 && charCode <= 122) {
        shiftedCharCode = ((charCode + shiftfactor - 97) % 26) + 97;
        //checks if the shiftfactor causded the charCode to go out of
        //alphabetical bounds.
        if (shiftedCharCode < 97 || shiftedCharCode > 122) {
          shiftedCharCode += 26;
        }
        //if the regex test fails just return the same charCode.
      } else {
        shiftedCharCode = charCode;
      }
      //convert the shiftedCharCode at the index back to a string character
      splitString[index] = String.fromCharCode(shiftedCharCode);
    }
  }
  // join back the splitString array to a string and return it.
  return splitString.join("");
};
// Do not edit below this line
module.exports = caesar;
