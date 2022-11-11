const products = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const burger_id = '🍔';

const new_arr = [];

console.log("ORIGINAL ---> ",products);

const burger = products.find((item) => item.id === burger_id)
if(burger){
    new_arr.push(burger)
    const index_burger = products.findIndex((item) => item.id === burger_id);
    products.splice(index_burger,1);
}

console.log("NEW ARRAY",new_arr);
console.log("NEW ORIGINAL ---> ",products);

//UPDATE
console.log("################## UPDATE");

const hot_cake_id = '🥞';

const products_v2 = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

console.log("ORIGINAL --->",products_v2);

const products_update = {
    id: hot_cake_id,
    changes: {
        price: 200,
        description: 'delicioso'
    }
}

const hot_cake_idx = products_v2.findIndex((item) => item.id === hot_cake_id)

products_v2[hot_cake_idx] = { ...products_v2[hot_cake_idx], ...products_update.changes }

console.log("UPDATED ---> ",products_v2);


