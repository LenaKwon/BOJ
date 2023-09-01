const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString(); //<-
input = input.split("\n");


input = input[0];
input = input.split(' ').map((item) => +item);
solution(input[0], input[1]);

function solution(A, B) {
    // Write your code
    console.log(A + B);
}