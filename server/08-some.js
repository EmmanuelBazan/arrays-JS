const numbers = [1,2,3,4];

let pair = false;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if(element % 2 === 0){
        pair = true
        break;
    }
}

const pair_s = numbers.some((item) => item % 2 === 0);

console.log("NO SOME --- ",pair);
console.log("SOME --- ",pair_s);