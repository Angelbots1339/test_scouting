const Promise = require('bluebird');
const express = require('express');
const router = express.Router();
const _ = require('lodash');
const util = require('util');
const request = require('supertest');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const urlEncodedParser = bodyParser.urlencoded({ extended: false });
const winston = require('winston');
const path = require('path');
const fill = require('../../../lib/filljson.js');
const teamR = require('../../../lib/teamR.js');
const indexR = require('../../../lib/indexR.js');
winston.level = process.env.LOG || 'info';

router.get('/', function (req, res) {
    indexR.render();
    res.sendFile(path.resolve('ui/hub/views/index.html'));
});

router.get('/:event', function (req, res) {
    teamR.render(req.params.event);
    res.sendFile(path.resolve(`ui/hub/views/${req.params.event}.html`));
});


router.get('/:event/:team', function (req, res) {
    let data = require(`../../../teams/${req.params.event}/${req.params.team}/average.json`);
    let teamData = {
        averageCubes: data.cubes,
        averageDriving: data.driving,
        averageAuto: data.auto
    };
    return res.status(200).send(teamData);
});

router.get('/do/the/thing', function (req, res) {
    fill.fill();
    return status(200)
    .redirect('/');
});

module.exports = router;