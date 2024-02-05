const fibonacci = function(num) {
    if (num < 0){
        return 'OOPS';
    }
    let fibonacciArray = [0, 1];
    let finalNumber = 0;
    for( let i = 2 ; i <= num ; i++){
        fibonacciArray[i] = fibonacciArray[i - 1] + fibonacciArray [i - 2];
    }
    finalNumber = fibonacciArray[num];
    return finalNumber;
};

// Do not edit below this line
module.exports = fibonacci;
