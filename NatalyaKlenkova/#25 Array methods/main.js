let numArray = [1, 4, 6, 2, 9, 5, 0];

function printArray(arr) {
    numArray.forEach(num => {
        console.log(`Number is ${num}`);
    })
}

printArray(numArray);



const animals = ['cat', 'dog', 'elephant', 'tiger', 'lion'];
const longWord = animals.find(animal => animal.length > 7);
console.log(longWord);

const numbers = [1, 11, -2, 3, -10, 4];
const negativeNumbers = numbers.filter(number => number < 0);
console.log(negativeNumbers);


const numbers2 = [1, 11, -2, 3, -10, 4];
const absNumbers = numbers.map(number => Math.abs(number));
console.log(absNumbers);


const numbersToSort = [1, 11, -2, 3, -10, 4];
const sortedNumbers = numbersToSort.sort((a, b) => b - a);
console.log(sortedNumbers)