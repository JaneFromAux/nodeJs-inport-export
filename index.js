const { arrayNumbers, arrayCars } = require("./data");
const { sortIt } = require("./sort");


const sortedNums = sortIt(arrayNumbers);
console.log(arrayNumbers);

const sortedCars = sortIt(arrayCars);
//console.log(sortedCars);
console.log(arrayCars + "  cars")