const fs = require('fs');
const request = require('request');
const cheerio = require('cheerio');
const splitStr = require('./split_team_number.js');
const eventData = require('./event_data.json');

let event = process.env.EVENT;
let eventCode = eventData[event];
console.log(event);
let url = `https://www.thebluealliance.com/event/${eventCode}`;
let arr = [];

request(url, function (err, resp, body) {
    let tempArr = [];
    $ = cheerio.load(body);
    links = $('[href^="/team/"]');
    $(links).each(function (i, link) {
        tempArr.push($(link).text());
    });
    tempArr.forEach(elem => {
        arr.push(elem);
        // console.log(res);
    });

    // console.log(arr);
    arr.forEach(teamDumb => {
        let team = splitStr.split(teamDumb).replace('/', ':').replace(':', ';');

        if (!fs.existsSync('teams/')) {
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