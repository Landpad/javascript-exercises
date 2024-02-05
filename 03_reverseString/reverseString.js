const reverseString = function(word) {
    let wordReversed = "";
    for ( let i = word.length - 1 ; i >= 0 ; i--){
        wordReversed += word[i];
    }
    
    return wordReversed;

};

// Do not edit below this line
module.exports = reverseString;
