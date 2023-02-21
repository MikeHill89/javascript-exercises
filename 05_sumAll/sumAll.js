const sumAll = function(a,b) {
    let lowNumber = Math.min(a,b);
    let highNumber = Math.max(a,b);
    
    let sum = 0;
    if ( a < 0 || b < 0 || (typeof a) !== "number" || (typeof b) !== "number" ){
        return "ERROR";
    } else {
        for (let i = lowNumber; i < highNumber +1; i++){
            sum +=i;
        }
        return sum;
    }
}
// Do not edit below this line
module.exports = sumAll;
