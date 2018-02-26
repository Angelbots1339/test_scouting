const csvFilePath = 'csv.csv';
const csv = require('csvtojson');

let res;

csv()
    .fromFile(csvFilePath)
    .on('json', (jsonObj) => {
        // console.log(jsonObj);
        res = jsonObj;
    })
    .on('done', (error) => {
        console.log('end')
    });

console.log(res);