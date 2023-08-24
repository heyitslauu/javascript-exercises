const reverseString = function(str) {
    let splittedString = str.split("");

    let reversed = splittedString.reverse();

    return reversed.join("");
};

// Do not edit below this line
module.exports = reverseString;
