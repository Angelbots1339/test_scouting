const fs = require('fs');
const request = require('request')
const cheerio = require('cheerio');

let event = process.env.EVENT;
let url = `https://www.thebluealliance.com/event/${event}`;
let arr = [];

request(url, function (err, resp, body) {
    let tempArr = [];
    $ = cheerio.load(body);
    links = $('[href^="/team/"]'); //use your CSS selector here
    $(links).each(function (i, link) {
        tempArr.push($(link).text() + ':\n  ' + $(link).attr('href'));
    });
    tempArr.forEach(elem => {
        let res = elem.slice(0, elem.indexOf(':'));
        arr.push(res);
        // console.log(res);
    });

    // console.log(arr);
    arr.forEach(team => {
        if (!fs.existsSync(`teams/${event}/`)) {
            fs.mkdirSync(`teams/${event}/`);
        }
        let dir = (`teams/${event}/${team}/`);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
            fs.mkdirSync(dir + 'matches/');
            console.log(`Added team ${team}`);
        }
    });

});
