const pets = [ "cat", "dog", "bat" ];

let res = false;
for (let index = 0; index < pets.length; index++) {
    const element = pets[index];
    if(element === "dog"){
        res = true
    }
}

const response = pets.includes("dog");

console.log("FOR --- ",res);
console.log("INCLUDES --- ",response);