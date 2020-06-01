const arr = [1,2,3];

const smallerArr = arr
    .filter(number => number !== 2)
    .map(number => number + 1);

console.log(smallerArr); 


const years = [1989, 2015, 2000, 1999, 2013, 1973, 2012];
let displayYears;

displayYears = years
    .filter(year => year > 2001)
    .map(year => `${year} A.D.`)

console.log(displayYears)

