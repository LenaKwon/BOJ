const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('');
const str = input.slice(0);
const rvs = str.reverse();
console.log(input.join('')===rvs.join('')? 1 : 0)