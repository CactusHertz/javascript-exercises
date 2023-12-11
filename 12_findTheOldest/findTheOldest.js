const findTheOldest = function(people) {
    const ordered = people.sort(function(a,b) {
        const currentYear = (new Date()).getFullYear();
        let lastGuy = 0;
        if ('yearOfDeath' in a){
            lastGuy = a.yearOfDeath - a.yearOfBirth;
        } else {
            lastGuy = currentYear - a.yearOfBirth;
        }
        let nextGuy = 0;
        if('yearOfDeath' in b){
            nextGuy = b.yearOfDeath - b.yearOfBirth;
        } else {
            nextGuy = currentYear - b.yearOfBirth;
        }
        return lastGuy > nextGuy ? -1:1;
    });
    return ordered[0];
};

// Do not edit below this line
module.exports = findTheOldest;
