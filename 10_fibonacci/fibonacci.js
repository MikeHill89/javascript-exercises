const fibonacci = function(count) {
    let initialValue = 0;
    let newValue = 1;
    if (count < 0) {
        return "OOPS"
    } else {
        for (let i = 1; i < count; i++) {
            const tempValue = newValue;
            newValue = initialValue + newValue;
            initialValue = tempValue;
        }
        return newValue;
    }
};

// Do not edit below this line
module.exports = fibonacci;
