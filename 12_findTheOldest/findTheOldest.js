const findTheOldest = function(array) {
    return array.reduce((oldest, currentPerson) => {
        let oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath)
        let currentAge = getAge(
            currentPerson.yearOfBirth,
             currentPerson.yearOfDeath
        );
        return oldestAge < currentAge ? currentPerson : oldest;
    })
};

const getAge = function (birthYear, deathYear) {
    if(!deathYear) {
        deathYear = new Date().getFullYear();
    }
    return deathYear - birthYear;
}

// Do not edit below this line
module.exports = findTheOldest;
