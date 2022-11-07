const numbers = [1, 30, 41, 29, 50, 60]

let res = undefined
let resIndx = -1;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if(element === 30){
        res = element
        resIndx = index
    }
}

const response = numbers.find((item) => item === 30)
const responseIndx = numbers.findIndex((item) => item === 30)

console.log("FOR --- ",res," Index: ",resIndx);
console.log("FIND --- ",response," Index: ",responseIndx);