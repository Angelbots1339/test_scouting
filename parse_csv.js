const csvFilePath = 'csv.csv';
const csv = require('csvtojson');

csv()
    .fromFile(csvFilePath)
    .on('json', (jsonObj) => {
        console.log(jsonObj);
    })
    .on('done', (error) => {
        console.log('end')
    })