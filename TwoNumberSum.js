const findPairWithSum = (numbers, targetSum) => {
    const mapa = new Map();
    for (let i = 0; i < numbers.length; i++) {
        const complement = targetSum - numbers[i];
        if (mapa.has(complement)) {
            return [numbers[i], complement];
        }
        mapa.set(numbers[i], i);
    }
    return [];
};

console.log("TwoNumberSum");

const numbers = [2, 7, 11, 15];
const targetSum = 9;

const result1 = findPairWithSum(numbers, targetSum);

console.log(result1);


const numbers2 = [3, 6, 8, 10];
const targetSum2 = 15;

const result2 = findPairWithSum(numbers2, targetSum2);

console.log(result2);
