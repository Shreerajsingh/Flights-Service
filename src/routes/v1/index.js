const express = require('express');

const { InfoController } = require('../../controllers');

const router = express.Router();
const airplaneRoutes = require('./airplane-routes');
const cityRoutes = require("./city-routes");

router.get('/info', InfoController.info);

router.use('/airplanes', airplaneRoutes);

router.use('/city', cityRoutes);

module.exports = router;