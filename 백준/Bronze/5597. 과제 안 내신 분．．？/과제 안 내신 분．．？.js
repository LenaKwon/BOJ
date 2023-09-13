const input = require("fs").readFileSync("dev/stdin").toString().trim().split("\n").map(val=>+val);

const arr = new Array(30).fill(0).map((n,index)=>index+1);

for(let i=0; i< arr.length; i++){
    for(let j=0; j<input.length; j++){
        input[j] === arr[i] ? delete arr[i] : arr[i] 
    } 
}
for(let k=0; k < arr.length; k++){
    typeof arr[k] === "number" ? console.log(arr[k]) : arr[k]
}