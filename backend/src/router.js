const express = require('express');

const route = express.Router({ mergeParams: true });

route.post('/survey', require('./controller/create'));
route.get('/nps-calculator', require('./controller/list'));

module.exports = route;
