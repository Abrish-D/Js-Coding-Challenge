// The sum of a Range
let range = function(start,end){
    let listOfNumber = [];
    for (let i = start; i <= end; i++) {
        listOfNumber.push(i);
    }
    return listOfNumber;
};

let sum = function(list){
    let sum = 0;
    for (let index = 0; index < list.length; index++) { 
        sum += list[index];
    }
    return sum;
};
console.log(sum(range(1,10)));

// Reversing an Array
const reverseArray = function(arrayOfNumbers) {
    const reverseArray = [];
    for (let i = arrayOfNumbers.length - 1; i >= 0; i--) {
        reverseArray.push(arrayOfNumbers[i]);
    }
    return reverseArray;
}
console.log(reverseArray([1,2,3,4,5]));

// LECTURE: Values and Variables
const countery = "Ethiopia";
const continent = "Africa";
const population = 120;
console.log(countery, continent, population);

// LECTURE: Data Types
const isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof countery);
console.log(typeof language);

// LECTURE: let, const and var
language = "Amharic";

// LECTURE: Basic Operators
let countery2 = population / 2;
console.log(countery2);
const description = `Ethiopia is in Africa, and its ${population} million people speak ${language}!`
console.log(description);

// First coding challenge
const markMass = 95;
const markHeight = 1.88;
const johnMass = 85;
const johnHeight = 1.76;
const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;
const markHigherBMI = markBMI > johnBMI;
console.log(markBMI, johnBMI, markHigherBMI);

// Second Coding Challenge
if (markHigherBMI) {
    console.log(`Mark's BMI ${markBMI} is higher than John's ${johnBMI}!`)
} else {
    console.log(`John's BMI ${johnBMI} is higher than Mark's! ${markBMI}`);
}

// Thired Coding Challenge
const dolphinsAvarageScore = (97 + 112 + 101) / 3;
const koalasAvarageScore = (109 + 91 + 110) / 3;
if(dolphinsAvarageScore > koalasAvarageScore && dolphinsAvarageScore >= 100) {
    console.log("Dolphins has higher score than Koalas!");
} else if(koalasAvarageScore > dolphinsAvarageScore && koalasAvarageScore >= 100) {
    console.log("Koalas has higher score than Dolphins!");
}else if(koalasAvarageScore === dolphinsAvarageScore && dolphinsAvarageScore >= 100 && koalasAvarageScore >= 100){
    console.log("They are draw!");
} else {
    console.log("no one wins the game!");
}

// Fourth Coding Challenge
const bill = 430;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);