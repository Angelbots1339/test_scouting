let fs = require('fs');
let json = {
    "this": "that"
};

josn = JSON.stringify(json);
let teams = fs.readdirSync('./teams/utah/');
teams.forEach(team => {
    fs.writeFileSync(`./teams/utah/${team}/average.json`, josn, 'utf8');
});