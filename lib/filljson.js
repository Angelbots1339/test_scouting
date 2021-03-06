const fs = require('fs');
const script = require('./average.js');

module.exports = {

    fill: function () {
        let newMatches = [];
        let event;

        let newData = fs.readdirSync('../../../../../E/new_data');
        newData.forEach(match => {
            let data = require(`../../../../../E/new_data/${match}`);
            let team = data.teamName;
            event = data.eventName;
            let stats = data;
            let matchNum = data.match;
            let json = JSON.stringify(stats);
            if (!fs.existsSync(`./teams/${event}`)) {
                fs.mkdirSync(`./teams/${event}`);
            }
            if (!fs.existsSync(`./teams/${event}/${team}`)) {
                fs.mkdirSync(`./teams/${event}/${team}`);
            }
            fs.writeFileSync(`./teams/${event}/${team}/matches/${match}.json`, json, 'utf8');
            if (newMatches.indexOf(team) === -1) {
                newMatches.push(team);
            }
        });

        newMatches.forEach(team => {
            console.log('THERE');
            script.average(team, event);
        });

        newData.forEach(file => {
            fs.unlinkSync(`../../../../../E/new_data/${file}`);
        });
    }
};