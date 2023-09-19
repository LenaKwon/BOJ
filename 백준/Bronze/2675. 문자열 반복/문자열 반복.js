const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

for(let i = 1; i <=  +input[0]; i++){
    const t = input[i].split(" ");
    const r = +t[0];
    const result = t[1].split("").map(val=>val.repeat(r)).join("");
    console.log(result)
}