const fs = require('fs');
const script = require('./average.js');

module.exports = {

    fill: function () {
        let newMatches = [];
        let event;

        let newData = fs.readdirSync('../new_data');
        newData.forEach(match => {
            let data = require(`../new_data/${match}`);
            let team = data.teamName;
            event = data.eventName;
            let stats = data;
            let matchNum = data.match;
            let json = JSON.stringify(stats);
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
            fs.unlinkSync(`../new_data/${file}`);
        });
    }
};