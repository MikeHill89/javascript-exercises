const palindromes = function (word) {
    
    let splitWord = word.split()
    let reverseWordArray = splitWord.reverse()
    let joinWordArray = reverseWordArray.join("");
    
    if (word === joinWordArray) {
        return true;
    } 
    return false;

};

// Do not edit below this line
module.exports = palindromes;
