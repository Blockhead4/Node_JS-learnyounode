const http = require("http");
const url = process.argv[2];

// const { BufferList } = require("bl");
// const bl = new BufferList();

// http.get(url, response => {
//   response.on("data", data => {
//     bl.append(Buffer.from(data));
//   });
//   response.on("end", () => {
//     console.log(bl.toString().length);
//     console.log(bl.toString());
//   });
// });

const bl = require("bl");

http.get(url, response => {
  response.pipe(
    bl((err, data) => {
      if (err) return console.error(err);
      data = data.toString();
      console.log(data.length);
      console.log(data);
    })
  );
});
