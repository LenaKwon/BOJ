const fs = require("fs").readFileSync("dev/stdin").toString().split('\n');

const input = Number(fs[0]);
let sum = 0;

for(let i = 1 ; i <= input ; i++){
    sum += i  
}
console.log(sum);