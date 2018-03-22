const fs = require('fs');


module.exports = {
    average: function (team, event) {
        console.log('HERE');
        let newData = {
            "count": 0,
            "cubes": 0,
            "auto": 0
        };
        let allData = fs.readdirSync(`./teams/${event}/${team}/matches/`);
        allData.forEach(dataName => {
            let data = require(`./teams/${event}/${team}/matches/${dataName}`);
            newData.cubes += data.cubes;
            if (data.CROSSLINE === 'SUCCESS') {
                newData.auto++;
            }
            newData.count++
        });
        newData.cubes /= newData.count;
        newData.auto /= newData.count;
        let json = JSON.stringify(newData);
        fs.writeFileSync(`./teams/${event}/${team}/average.json`, json, 'utf8');
    }
};