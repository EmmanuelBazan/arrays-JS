const numbers = [7,3,6,5,2,4,2,5,3,5,4,6,7,18,9,9,9,2,7,3,10,7,2,3,8,4,7,2];

const frec = numbers.reduce((res,num) => {
    if(num > 0 && num < 6){
        if(!res['1-5']){
            res['1-5'] = 1
        } else {
            res['1-5'] += 1
        }
    } else if(num > 5 && num < 9){
        if(!res['6-8']){
            res['6-8'] = 1
        } else {
            res['6-8'] += 1
        }
    } else if(num > 8 && num < 11){
        if(!res['9-10']){
            res['9-10'] = 1
        } else {
            res['9-10'] += 1
        }
    }

    return res
},{});

console.log(frec);