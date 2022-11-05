const items = [1,3,2,3,3,1,2,2,1,1,5,6,3,3,3,3,1];
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

const response = items.reduce((res,item) => {
    if(!res[item]){
        res[item] = 1
    } else {
        res[item] += 1
    }
    return res
},{});

const delivered = orders
.map((item) => item.delivered )
.reduce((res,item) => {
    if(item){
        if(!res['entregadas']){
            res['entregadas'] = 1
        } else {
            res['entregadas'] += 1
        }
    } else {
        if(!res['pendientes']){
            res['pendientes'] = 1
        } else {
            res['pendientes'] += 1
        }
    }
    return res
},{})

// console.log(response);
console.log(delivered);