const numbers1 = [1,2,3,4]
const numbers2 = [5,6,7,8]
const numbers3 = [9,10,11,12]

const new_arr = [...numbers1];
for (let index = 0; index < numbers2.length; index++) {
    const element = numbers2[index];
    new_arr.push(element);
}

const new_concat = numbers1.concat(numbers2);

console.log("ORIGINAL --- ",numbers1);
console.log("NEW ARR --- ",new_arr);
console.log("CONCAT --- ",new_concat);