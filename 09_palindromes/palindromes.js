const palindromes = function (string) {
    /*
        Convert string to lowercase, regex replaces all non lowercase 
        with nothing.
         
        Split string in to array, reverse it,join it without spaces 
        and check for strict equality between the two.
    */
    const lowerCaseString = string.toLowerCase().replace(/[^a-z]/g, "");
    return lowerCaseString.split("").reverse().join("") === lowerCaseString;    

};

// Do not edit below this line
module.exports = palindromes;
