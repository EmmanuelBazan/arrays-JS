const totals = [1,2,3,4];

let total_unico = 0;

for (let index = 0; index < totals.length; index++) {
    const element = totals[index];
    total_unico += element;
}

const total_r = totals.reduce((sum,item) => sum + item, 0);

console.log(total_r);