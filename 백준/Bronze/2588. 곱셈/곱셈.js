let fs = require("fs")
const [a,b] = fs.readFileSync("dev/stdin").toString().trim().split("\n");

const num1 = parseInt(a);
const num2 = parseInt(b);
const num2_s = b.split('').map(val=>+val);


let multiply = num2_s.reverse().map(x=>x*num1);
multiply.push(num1*num2);

console.log(multiply.join('\n'));