const caesar = function (string, shiftfactor) {
  const splitString = string.split("");
  const alphabetRange = /[a-zA-Z]/;

  for (let index = 0; index < splitString.length; index++) {
    const charCode = splitString[index].charCodeAt();
    if (alphabetRange.test(splitString[index])) {
      let shiftedCharCode;

      if (charCode >= 65 && charCode <= 90) {
        shiftedCharCode = ((charCode + shiftfactor - 65) % 26) + 65;
      } else if (charCode >= 97 && charCode <= 122) {
        shiftedCharCode = ((charCode + shiftfactor - 97) % 26) + 97;
      } else {
        shiftedCharCode = charCode;
      }
      splitString[index] = String.fromCharCode(shiftedCharCode);
    }
  }
  return splitString.join("");
};
// Do not edit below this line
module.exports = caesar;
