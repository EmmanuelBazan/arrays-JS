const team = [
  {
    name: "Nicolas",
    age: 29,
  },
  {
    name: "Andrea",
    age: 22,
  },
  {
    name: "Zulema",
    age: 16,
  },
  {
    name: "Santiago",
    age: 18,
  },
];

const everyMore15 = () => {
    let adolecentes = true;
    for (let index = 0; index < team.length; index++) {
        const element = team[index];
        if(element.age < 15){
            adolecentes = false
            break;
        }
    }
    return adolecentes
}

const response = team.every((item) => item.age > 15);

console.log("FOR --- ",everyMore15());
console.log("EVERY --- ",response);