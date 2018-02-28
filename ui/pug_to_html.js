const pug = require('pug');
const fs = require('fs');

let event = [process.env.EVENT];
let teamdir = fs.readdirSync(`./teams/${event}`);

let html = pug.renderFile('ui/home.pug', {
    teamDir: teamdir,
    name: 'TEAMS'
});

fs.writeFileSync('ui/home.html', html, 'utf8');