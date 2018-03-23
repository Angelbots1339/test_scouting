const pug = require('pug');
const fs = require('fs');

let event = 'colorado';
let teamdir = fs.readdirSync(`./teams/${event}`);


teamdir.forEach(team => {
    if (!fs.existsSync(`./ui/${event}/${team}/`)) {
        fs.mkdirSync(`./ui/${event}/${team}/`);
    }
    let dataJson = require(`./teams/${event}/${team}/average.json`);
    let cubes = `Average Cubes: ${dataJson.cubes}`;
    let auto = `Average Auto Completion: ${dataJson.auto}`;
    let rating = `Average Driver's Rating (Out Of 5): ${dataJson.rating}`;
    let html = pug.renderFile('ui/writehtml.pug', {
        name: team,
        cubes: cubes,
        auto: auto,
        rating: rating
    });

    fs.writeFileSync(`./ui/${event}/${team}/data.html`, html, 'utf8');
});