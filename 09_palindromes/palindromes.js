const palindromes = function (word) {
    word = word.replaceAll(' ', '');
    word = word.replace(/[^a-zA-Z0-9 ]/g, '');
    word = word.toLowerCase();
    let reversedWord = '';
    for(let i = word.length - 1 ; i >= 0 ; i--){
        reversedWord += word[i];
    }
    if(word == reversedWord){
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
