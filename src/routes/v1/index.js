const express = require('express');

const { InfoController } = require('../../controllers');

const router = express.Router();
const airplaneRoutes = require('./airplane-routes')

router.get('/info', InfoController.info);

router.use('/airplanes', airplaneRoutes);

module.exports = router;