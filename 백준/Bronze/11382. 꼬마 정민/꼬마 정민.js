const fs = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");
const input = fs[0].split(" ").map(val=>+val);
console.log(input[0]+input[1]+input[2]);