const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
 const new_arr = [];

 for (let index = 0; index < matrix.length; index++) {
    const element_1 = matrix[index];
    for (let index = 0; index < element_1.length; index++) {
        const element = element_1[index];
        new_arr.push(element)
    }
 }

 const new_flat = matrix.flat()

 console.log("ORIGINAL ---> ",matrix);
 console.log("FOR ---> ",new_arr);
 console.log("FLAT ---> ",new_flat);