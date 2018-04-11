const pug = require('pug');
const fs = require('fs');

module.exports = {
    render: function (event) {
        let teamdir = fs.readdirSync(`./teams/${event}`);

        let html = pug.renderFile('ui/teamR.pug', {
            event: event,
            teamDir: teamdir
        });

        // if (!fs.existsSync(`ui/hub/views/${event}/`)) {
        //     fs.mkdirSync(`ui/hub/views/${event}/`);
        // }
        fs.writeFileSync(`ui/hub/views/${event}.html`, html, 'utf8');
    }
}