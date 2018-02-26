const fs = require('fs');

let teams = fs.readdirSync('./teams');

teams.forEach(team => {
    let res = {
        "score": 0
    };

    let matches = fs.readdirSync(`./teams/${team}/matches`);
    let len = matches.length;
    let s = res.score;

    matches.forEach(match => {
        let matchScore = require(`./teams/${team}/matches/${match}`).score;
        s += matchScore;
    });

    res.score = s / len;
    let json = JSON.stringify(res);
    fs.writeFileSync(`./teams/${team}/average.json`, json, 'utf8');
});