const products = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const deleted = products.filter((item) => item.id !== '🍔')

console.log("ORIGINAL ---> ",products);
console.log("NO BURGER ---> ",deleted);