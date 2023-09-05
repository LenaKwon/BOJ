const a = require("fs").readFileSync("dev/stdin");

console.log(
      89 < a ? "A"
    : 79 < a ? "B"
    : 69 < a ? "C"
    : 59 < a ? "D"
    : "F"
);