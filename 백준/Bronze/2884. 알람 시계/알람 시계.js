const input =require("fs").readFileSync("dev/stdin").toString().split(" ");
let h = Number(input[0]);
let m = Number(input[1]);

console.log(m >= 45 ? h +' '+ (m-45) 
: h > 0 ? h - 1 + ' ' + (60+m-45)
: 23 + ' ' + (60+m-45)
);
  