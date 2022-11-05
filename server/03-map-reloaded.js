const orders = [
  {
    customerName: "Nicolas",
    total: 60,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 180,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
];

const listTotales = orders.map(item => {
    //INCORRECTO se esta modificando el original en memoria
    // item.tax = .19;
    // return item;

    //CORRECTO no afecta al original en memoria
    return {
        ...item,
        tax: Math.trunc(item.total * .19)
    }
});
console.log("ORIGINAL   ",orders);
console.log("COPIA   ",listTotales);
   