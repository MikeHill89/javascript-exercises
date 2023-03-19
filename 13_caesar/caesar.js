const caesar = function (string, shiftfactor) {

    const splitString = string.split("");
        
    for (let index = 0; index < splitString.length; index++) {
        const charCode = splitString[index].charCodeAt();
        if (charCode === 44 || charCode === 33 || charCode === 32) continue;
        const charCodeShift = charCode + shiftfactor;
        splitString[index] = String.fromCharCode(charCodeShift)
    };
    
    return splitString.join("");
};
// Do not edit below this line
module.exports = caesar;
