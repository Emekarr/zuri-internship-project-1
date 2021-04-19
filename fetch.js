const https = require("https");

const fetch_data = https
  .get("https://jsonplaceholder.typicode.com/posts", (res) => {
    let data = "";

    res.on("data", (chunk) => {
      data += chunk;
    });

    res.on("end", () => {
      console.log(data);
    });
  })
  .on("error", (error) => {
    console.log(error.message);
  });

module.exports = fetch_data;
