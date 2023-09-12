"use strict"
const input = require("fs").readFileSync("dev/stdin").toString().trim().split("\n").map(val=>+val);
const cnt = input.length;
const max = Math.max(...input);
console.log(max) 
for(let i=0; i<cnt; i++){
     input[i]===max? console.log(i+1): ""
}