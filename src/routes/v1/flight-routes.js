const express = require('express');
const { FlightController } = require('../../controllers');
const { FlightMiddlewares } = require('../../middlewares');

const router = express.Router();

router.post('/', FlightMiddlewares.validateCreateRequest, FlightController.createFlight);

router.get('/', FlightController.getAllFlights);

router.get('/:id', FlightController.getFlight);

<<<<<<< HEAD
router.patch('/:id/seats', FlightMiddlewares.validateUpdateSeatRequest, FlightController.updateSeats);

=======
>>>>>>> bac035f27fa1adf0ac7e3a63e7871bcbcb157868
/*

router.get('/:id', FlightController.getFlight);

router.delete('/:id', FlightController.destroyFlight);

router.patch('/:id', FlightController.updateFlight);

*/

module.exports = router;