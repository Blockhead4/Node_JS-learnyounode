const fs = require("fs");
const path = require("path");

module.exports = (dir, filterStr, callback) => {
  fs.readdir(dir, "utf8", (err, data) => {
    if (err) return callback(err);

    const result = data.filter(filename => {
      const ext = path.extname(filename);
      return ext === "." + filterStr;
    });

    callback(null, result);
  });
};
