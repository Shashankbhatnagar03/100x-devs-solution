const fs = require("fs");

fs.writeFile(
  "D:/harkirat-cohort/assignment/week-2/01-async-js/easy/data.txt",
  "Hello, world!",
  "utf8",
  (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("File written successfully.");
  }
);

fs.readFile(
  "D:/harkirat-cohort/assignment/week-2/01-async-js/easy/data.txt",
  "utf8",
  (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  }
);