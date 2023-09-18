"use strict"
const [n,num] = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");
const nums = num.split("").map(Number);

let sum = 0;
for(let i = 0; i < n; i++){
    sum += nums[i];
}
console.log(sum);