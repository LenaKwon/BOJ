const input = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");
const num = +input[0];
const ints = input[1].split(" ").map(val=>+val);
const look = +input[2];

let v =0;
for(let i=0; i< num; i++){
  look == ints[i]? v += 1 : v
}
console.log(v)