const fs = require("fs").readFileSync("dev/stdin").toString().split("\n");
const time =fs[0].split(" ").map(val=>+val);
const cookTime=Number(fs[1]);
const [hr,min]=time;

const h = Math.floor((min+cookTime)/60)
const m = (min+cookTime)%60

console.log (
  h < 1 ? hr + ' ' + (min + cookTime)
  : hr + h > 23 ? hr + h - 24 + " " + m
  : hr + h + " " + m
)