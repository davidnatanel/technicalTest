
function minNonConstructibleChange(coins) {

    coins.sort((a, b) => a - b);

    let minChange = 0;


    for (const coin of coins) {

        if (coin > minChange + 1) {
            break;
        }
        minChange += coin;
    }



    return minChange + 1;
}

console.log("Non-ConstructibleChange");

const coins = [5, 7, 1, 1, 2, 3, 22];
const result = minNonConstructibleChange(coins);
console.log(result); 