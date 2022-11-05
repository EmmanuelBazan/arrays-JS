const words = ["spray", "elites", "limit", "apple", "exuberant"];
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
const newArr = [];

const newArrF = words.filter((item) => item.length >= 6);
const orders_filter = orders.filter((item) => item.delivered && item.total >= 100);

for(let index = 0; index < words.length; index++){
    let element = words[index];
    if(element.length >= 6){
        newArr.push(element)
    }
}

// console.log("ORIGINAL --- ",orders);
// console.log("FOR --- ",newArr);
// console.log("FILTER --- ",orders_filter);

const search = (name) => {
    return orders.filter((item) => {
        return item.customerName.includes(name);
    })
}

console.log(search("Nico"));