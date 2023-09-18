const fs = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");

console.log(fs[0][fs[1]-1]);