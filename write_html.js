const pug = require('pug');
const fs = require('fs');

let event = 'colorado';
let teamdir = fs.readdirSync(`./teams/${event}`);


teamdir.forEach(team => {
    fs.mkdirSync(`./ui/${event}/${team}/`);
    let data = JSON.stringify(require(`./teams/${event}/${team}/average.json`));
    let html = pug.renderFile('ui/writehtml.pug', {
        name: team,
        json: data
    });

    fs.writeFileSync(`./ui/${event}/${team}/data.html`, html, 'utf8');
});