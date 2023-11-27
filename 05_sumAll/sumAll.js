const sumAll = function(start, end) {
    let finalSum = 0;
    let min = 0;
    let max = 0;
    if (typeof start !== 'number' || typeof end !== 'number'){
        return 'ERROR';
    }
    if (start < 0 || end < 0){
        return 'ERROR';
    }
    

    if (start < end){
        min = start;
        max = end;
    }
    else{
        min = end;
        max = start;
    }

    for (let i = min; i < max + 1; i++){
        finalSum += i;
    }
    
    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
