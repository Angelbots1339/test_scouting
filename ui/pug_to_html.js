const pug = require('pug');
const fs = require('fs');

let team = process.env.TEAM;
let match = 'thisOne.json';
let file = require(`../teams/${team}/average.json`);
let pointAverage = file.score;

let html = pug.renderFile('ui/home.pug', {
    name: team,
    pointAverage: pointAverage
});

fs.writeFileSync('ui/home.html', html, 'utf8');