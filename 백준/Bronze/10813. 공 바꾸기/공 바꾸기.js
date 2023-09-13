"use strict"
const input =require("fs").readFileSync("dev/stdin").toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(val=>+val);

let arr = new Array(N).fill(0).map((n,index)=>index+1);
for(let i=1; i <=M; i++){
    const[a,b] = input[i].split(" ").map(val=>val);
    [arr[a-1],arr[b-1]] = [arr[b-1],arr[a-1]]
    arr.toString()
}
console.log(arr.join(" "));