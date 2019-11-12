const fs = require("fs");

fs.readFile(process.argv[2], "utf8", (err, data) => {
  if (err) {
    console.error("error: ", err);
  } else {
    const lines = data.toString().split("\n").length - 1;
    console.log(lines);
  }
});
