const fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().trim().split("\n").map(x=>x.trim().split(" ").map(x=>+x));
// console.log(input);
const[n,m]=input.shift();
// console.log(n,m);
// console.log(input)
let arr = new Array(m);
let array =[];
arr.fill(0);
// console.log(arr)
for(let i=0; i<n; i++){
    array.push([...arr]);
}
// console.log(array)
for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      array[i][j] = input[i][j] + input[i + n][j];
    }
}
// console.log(array)
let answer = "";
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    answer += array[i][j].toString() + " ";
  }
  answer += "\n";
}
console.log(answer);