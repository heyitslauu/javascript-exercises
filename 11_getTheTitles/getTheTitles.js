const getTheTitles = function(arr) {
    let newArray = [];

    arr.forEach(item => {
        newArray.push(item.title)
    });

    return newArray;
};

// Do not edit below this line
module.exports = getTheTitles;
