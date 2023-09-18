const [n, ...str] = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");

for(let i =0; i< n; i++){
    const len = (str[i].length)-1;
    console.log(str[i][0]+str[i][len]);  
}