const strings = ['1','2','3','4','5'];

const numbers = strings.map(string => parseInt(string, 10))

console.log(numbers)

const fruits = ['apple', 'pear', 'cherry'];

const capitalizedFruits = fruits.map(fruit => fruit.toUpperCase());


console.log(capitalizedFruits); 

const prices = [5, 4.23, 6.4, 8.09, 3.20];

const pricesWithSign = prices.map(price => "$"+price.toFixed(2))
console.log(pricesWithSign)

const total = prices.reduce(
    ( sum, price ) => sum + price,
    0
  )
  console.log(total)



const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let abbreviatedDays;

// abbreviatedDays should be: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
// Write your code below

abbreviatedDays = daysOfWeek.map(days => days.charAt(0)+days.charAt(1)+days.charAt(2))
console.log(abbreviatedDays)

const names = ['Gary', 'Pasan', 'Gabe', 'Treasure', 'Gengis', 'Gladys', 'Tony'];

const gNames = names.reduce(( count, name ) => count + (name[0]==="G" ? 1 : 0), 0)
  console.log(gNames)


const phoneNumbers = ["(503) 123-4567", "(646) 123-4567", "(503) 987-6543", "(503) 234-5678", "(212) 123-4567", "(416) 123-4567"];
let numberOf503 


numberOf503 = phoneNumbers.reduce((count, name) => count + (name.substring(1,4)==="503" ? 1 : 0), 0)
console.log(numberOf503)