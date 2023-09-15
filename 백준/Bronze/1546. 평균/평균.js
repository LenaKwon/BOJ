const fs = require("fs");
const [N, ...scores] = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const n = +N;
const score = scores[0].split(" ").map(Number);

let newSum=0;
for(let i=0; i< n; i++){
    newSum += score[i] / Math.max(...score) * 100
}
console.log(newSum/n)