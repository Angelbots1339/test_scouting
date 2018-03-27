const express = require('express');
const path = require('path');
const routes = require('./routes/index');
const app = express();
const port = process.env.PORT || 8000;
const winston = require('winston');
const indexJs = require('./routes/index.js');
winston.level = process.env.LOG || 'info';

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.use('/', routes);

app.listen(port, function () {
    winston.info(`starting server on port ${port}`);
});