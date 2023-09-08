const fs = require("fs").readFileSync("dev/stdin").toString().split("\n").map(Number);
//console.log(fs)
const input = fs[0];
//console.log(input)

let num = input / 4;
let long = ['long ']
console.log(long[0].repeat(num) + 'int');