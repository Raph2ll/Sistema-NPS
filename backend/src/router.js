const express = require('express');

const route = express.Router({ mergeParams: true });

route.post('/survey', require('./controller/create'));

module.exports = route;
