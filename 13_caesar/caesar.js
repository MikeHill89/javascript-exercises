const caesar = function(string) {
   const letterArray = Array.from(string)

    for (let i = 0; i < letterArray.length; i++) {
        let shiftFactor = 1;
        const charCode = letterArray[i].charCodeAt(i);
        const encodedLetter = charCode + shiftFactor;
        return String.fromCharCode(encodedLetter);
        

    }

};

// Do not edit below this line
module.exports = caesar;
