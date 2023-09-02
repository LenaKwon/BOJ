const fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString();
input = input.split("\n");

input = input[0];
input = input.split(' ').map((item)=>+item);

substract(input[0],input[1]);
function substract(a,b) {
    console.log(a-b);
}