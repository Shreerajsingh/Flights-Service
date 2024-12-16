const express = require('express');

const { InfoController } = require('../../controllers');

const router = express.Router();
const airplaneRoutes = require('./airplane-routes');
const cityRoutes = require("./city-routes");
const airportRoutes = require("./airport-routes");

router.get('/info', InfoController.info);

router.use('/airplanes', airplaneRoutes);

router.use('/city', cityRoutes);

router.use('/airports', airportRoutes);

module.exports = router;