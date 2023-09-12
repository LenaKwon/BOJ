const input = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");

const nums = input[0].split(" ");
const num = +nums[0];
const int = +nums[1];
const series =  input[1].split(" ").map(val=>+val);

for (let i= 0; i< num; i++){
    series[i]< int ? console.log(series[i]) : i
}