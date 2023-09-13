const input = require("fs").readFileSync("dev/stdin").toString().trim().split("\n").map(Number);
const remain = new Set();
for(let i=0; i<input.length; i++){
   remain.add(input[i] % 42); 
}
console.log(remain.size)