const months = ["March", "Jan", "Feb", "Dec"];
months.sort();
console.log("\n################# MONTHS");
console.log("MONTHS ---> ", months);

console.log("\n################# NUMBERS");
const numbers = [1, 30, 4, 21, 100000];
const menor_mayor = [...numbers].sort((a, b) => a - b);
const mayor_menor = [...numbers].sort((a, b) => b - a);
numbers.sort();
console.log("SIN PARAMETROS ---> ", numbers);
console.log("MAYOR - MENOR ---> ", mayor_menor);
console.log("MENOR - MAYOR", menor_mayor);

const words = [
  "réservé",
  "premier",
  "communiqué",
  "café",
  "adieu",
  "éclair",
  "banana",
];
words.sort();
console.log("\n################# SPECIAL CHAR");
console.log(words);

const orders = [
  {
    customerName: "Nicolas",
    total: 600,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 1840,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
];

console.log("\n################# ORDERS BY TOTAL");
orders.sort((a, b) => b.total - a.total);
console.log(orders);
