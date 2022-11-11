const id_hotCake = '🥞';

const products = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const product_update = {
    id: id_hotCake,
    changes: {
        price: 200,
        description: 'delicioso'
    }
}

const products_updated = products.map((item) => {
    if(item.id === id_hotCake){
        return {
            ...item,
            ...product_update.changes
        }
    }
    return item
})

console.log("ORIGINAL ---> ",products);
console.log("UPDATED ---> ", products_updated);