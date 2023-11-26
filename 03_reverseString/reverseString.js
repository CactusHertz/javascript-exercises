const reverseString = function(string) {
    let finalString = '';
    for (let i = string.length; i > 0; i--){
        finalString = finalString + string.charAt(i - 1);
    }
    return finalString
};

// Do not edit below this line
module.exports = reverseString;
