let input = require("fs").readFileSync("dev/stdin").toString().split('\n');
let num = +input[0];
let stars =''

for (let i = 1; i<=num; i++){
    stars += ' '.repeat(num-i) + "*".repeat(i) +" \n";
}
console.log(stars);