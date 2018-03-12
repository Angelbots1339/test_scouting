let fs = require('fs');
let json = {
    "this": "that"
};

josn = JSON.stringify(json);
let teams = fs.readdirSync('./teams/colorado/');
teams.forEach(team => {
    fs.writeFileSync(`./teams/colorado/${team}/average.json`, josn, 'utf8');
});