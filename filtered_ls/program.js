const fs = require("fs");
const path = require("path");

const file = process.argv[2];
const fileFilter = "." + process.argv[3];

fs.readdir(file, "utf8", (err, data) => {
  if (err) return console.error("error: ", err);
  data.forEach(filename => {
    const ext = path.extname(filename);
    if (ext === fileFilter) {
      console.log(filename);
    }
  });
});
