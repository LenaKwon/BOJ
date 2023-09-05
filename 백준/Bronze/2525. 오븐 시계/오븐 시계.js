const fs = require("fs").readFileSync("dev/stdin").toString().split("\n");
const time =fs[0].split(" ").map(val=>+val);
const cookTime=Number(fs[1]);
const [hr,min]=time;

console.log (
  (min+cookTime)/60 < 1 ? hr + ' ' + (min + cookTime)
  : hr + Math.floor((min+cookTime)/60) > 23 ? hr + Math.floor((min+cookTime)/60)-24 + " " + (min+cookTime)%60
  : hr + Math.floor((min+cookTime)/60) + " " + (min+cookTime)%60
)