const mymodule = require("./load_filtered_file");

const dir = process.argv[2];
const filterStr = process.argv[3];

mymodule(dir, filterStr, (error, list) => {
  if (error) {
    return console.log("error: ", error);
  }

  list.forEach(filename => {
    console.log(filename);
  });
});
