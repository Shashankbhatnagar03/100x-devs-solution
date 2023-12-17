


const fs = require('fs');


function cleanFile(filePath) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);

    // Remove extra spaces using regex and trim excess spaces from start and end
    const cleanedData = data.replace(/\s+/g, ' ').trim();

    fs.writeFile(filePath, cleanedData, 'utf8', (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log('File cleaned successfully.');
      console.log(cleanedData);
    });
  });
}


const filePath ="D:/harkirat-cohort/assignment/week-2/01-async-js/medium/data.txt";

cleanFile(filePath);
