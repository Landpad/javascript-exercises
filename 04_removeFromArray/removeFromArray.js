const removeFromArray = function(array) {
    let i = 0;

    for( i ; i <= array.length - 1 ; i++ ){

        for( let j = 0 ; j < arguments.length ; j++ ){

            if( typeof array[i] === "string" && typeof arguments[j] === "string" && array[i] == arguments[j] ){
                array.splice(i, 1);
                i = i - 1;
            } else if ( typeof array[i] === "number" && typeof arguments[j] === "number" && array[i] == arguments[j] ){
                array.splice(i, 1);
                i = i - 1;
            }

        }

    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
