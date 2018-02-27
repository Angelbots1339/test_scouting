const fs = require('fs');
const request = require('request');
const cheerio = require('cheerio');
const splitStr = require('./split_team_number.js');

let event = process.env.EVENT;
let url = `https://www.thebluealliance.com/event/${event}`;
let arr = [];

request(url, function (err, resp, body) {
    let tempArr = [];
    $ = cheerio.load(body);
    links = $('[href^="/team/"]'); //use your CSS selector here
    $(links).each(function (i, link) {
        tempArr.push($(link).text());
    });
    tempArr.forEach(elem => {
        arr.push(elem);
        // console.log(res);
    });

    // console.log(arr);
    arr.forEach(teamDumb => {
        let team = splitStr.split(teamDumb);
        
        if(!fs.existsSync('teams/')){
            fs.mkdirSync('teams/');
        }
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
