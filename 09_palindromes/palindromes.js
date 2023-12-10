const palindromes = function (str) {
    let cleanStr = str.replace(/[^a-zA-Z0-9]+/g, "").toLowerCase();
    let reverseStr = '';
    for(let i = cleanStr.length - 1; i > -1; i--){
        reverseStr = reverseStr + cleanStr[i];
    }
    return cleanStr === reverseStr;
};

// Do not edit below this line
module.exports = palindromes;
