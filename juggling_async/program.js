const http = require("http");
const bl = require("bl");
const urls = process.argv.slice(2, process.argv.length);

const results = [];
let count = 0;

for (let i = 0; i < 3; i++) {
  http.get(urls[i], response => {
    response.pipe(
      bl((err, data) => {
        if (err) return console.error(err);

        results[i] = data.toString();
        count++;

        if (count === 3) results.forEach(result => console.log(result));
      })
    );
  });
}
