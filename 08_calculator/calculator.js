const add = function(...numbers) {
    let result = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        result += numbers[i];
    }
    return result;
};

const subtract = function(...numbers) {
    let result = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        result -= numbers[i];
    }
    return result;
};

const sum = function(...numbers) {
    numbers = numbers[0];// gets the first item in the ...numbers array
    return numbers.reduce((total, num) => total + num, 0);
}

const multiply = function(...numbers) {
    numbers = numbers[0]// gets the first item in the ...numbers array
    return numbers.reduce((total, num) => total * num, 1);
       
};

const power = function(a,b) {
    let result = Math.pow(a,b)
    return result
};

const factorial = function() {

};

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial
};
