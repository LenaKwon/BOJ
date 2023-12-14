const fs = require('fs');
const input= fs.readFileSync("./dev/stdin").toString().trim().split("\n").map(v=>v.split(" ").map(v=>+v));
// console.log(input);
const g = new Array(1);
const m = new Array(1);
g.fill(0);
m.fill(0);
// console.log(g)
for(let i=0; i<9; i++){
    for(let j=0; j<9; j++){
        // console.log(input[i][j])
        if(g[0] < input[i][j]){
            g.splice(0,1,input[i][j]);
        }
        if(input[i][j] == g[0]){
            m.splice(0,1,[i+1,j+1]);
        }

    }
}

console.log(g + "\n" + (m[0].join(" ")))

