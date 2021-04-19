const https = require("https");
const fs = require("fs");

const fetch_data = https
  .get("https://jsonplaceholder.typicode.com/posts", (res) => {
    let data = "";

    res.on("data", (chunk) => {
      data += chunk;
    });

    res.on("end", () => {
      save_json(data);
    });
  })
  .on("error", (error) => {
    console.log(error.message);
  });

const save_json = (data) => {
  fs.writeFile("./result/posts.json", data, (error) => {
    if (error) console.log(error);
  });
};

module.exports = fetch_data;
