const orders = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
      attrributes: [1,5,2,7,2,8]
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
      attrributes: [1,5,3,7,4,8]
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
      attrributes: [1,4,2,7,7,3]
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
      attrributes: [3,5,7,7,2,8]
    },
  ];

const arr_attr = orders.map((item) => item.attrributes).flat();
const arr_flatmap = orders.flatMap((item) => item.attrributes);

console.log("MAP ---> ",arr_attr);
console.log("FLAT MAP ---> ",arr_flatmap);