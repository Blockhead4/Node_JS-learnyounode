const fs = require("fs");

const buf = fs.readFileSync(process.argv[2]);
const str = buf.toString();
const result = str.split("\n").length - 1;

console.log(result);
