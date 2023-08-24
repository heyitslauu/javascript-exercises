const sumAll = function(start,end) {
    let finalSum = 0;
    let temp = 0;

    if(start < 0 || end  < 0) {
        return "ERROR"
    }
    
    if(typeof(start) !== 'number' || typeof(end) !== 'number') {
        return "ERROR"
    }
    
    if(start > end ) {
        temp = start;
        start = end;
        end = temp;
    }

    for(i = start; i <= end; i++ ) {
        finalSum += i;
    }
    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
