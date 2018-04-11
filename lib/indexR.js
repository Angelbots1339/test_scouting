const pug = require('pug');
const fs = require('fs');

module.exports = {
    render: function () {
        let events = fs.readdirSync(`./teams`);
        let html = pug.renderFile('ui/eventR.pug', {
            eventDir: events
        });
        fs.writeFileSync(`./ui/hub/views/index.html`, html, 'utf8');
    }
}