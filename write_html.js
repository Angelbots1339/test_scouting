const pug = require('pug');
const fs = require('fs');

let event = 'utah';
let teamdir = fs.readdirSync(`./teams/${event}`);

teamdir.forEach(team => {
    let data = JSON.stringify(require(`./teams/${event}/${team}/average.json`));
    let html = pug.renderFile('ui/writehtml.pug', {
        name: team,
        json: data
    });

    fs.writeFileSync(`./ui/utah/${team}.html`, html, 'utf8');
});