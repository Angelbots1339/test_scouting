const fs = require('fs');

let all = fs.readdirSync('./teams/Colorado');

let this_thing = JSON.stringify({ "points": 420, "cubes": 7 });
let other_thing = JSON.stringify({ "points": 42, "cubes": 5 });
all.forEach(team => {
    fs.writeFileSync(`./teams/Colorado/${team}/this_thing.json`, this_thing, 'utf8');
    fs.writeFileSync(`./teams/Colorado/${team}/other_thing.json`, other_thing, 'utf8');
});