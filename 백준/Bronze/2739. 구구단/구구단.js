const fs = require("fs").readFileSync("dev/stdin").toString().split('').map(Number);
const input = fs[0];

for(let i=1; i<10; i++){
    console.log(input + ' * ' + i + ' = ' + (input * i))  
}