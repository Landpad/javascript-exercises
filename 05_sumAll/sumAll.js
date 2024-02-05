const sumAll = function(a,b) {
    let greaterValue;
    let lesserValue;
    let add = 0;

    if ( a > b ){
        greaterValue = a;
        lesserValue = b;
    } else {
        greaterValue = b;
        lesserValue = a;
    }

    if (a < 0 || b < 0 || typeof a != "number" || typeof b != "number" ){
        return 'ERROR';
    }

    for( lesserValue ; lesserValue <= greaterValue ; lesserValue++){
        add += Number(lesserValue);
    }

    return add;
    
};

// Do not edit below this line
module.exports = sumAll;
