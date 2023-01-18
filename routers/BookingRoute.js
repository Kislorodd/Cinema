const express = require('express');
const router = express.Router();

const validate = require('../middleware/Validate');
const bookingScheme = require('../schemes/BookingSheme');

const isAuthorize = require('../middleware/IsAuthorize');

const bookingController = require('../controllers/BookingController');
const mongoLogger = require("../utils/MongoLogger");

router.use(isAuthorize);
router.use(mongoLogger.LogHttpEvent);
router.get('/', bookingController.GetAll
    /*
    #swagger.tags = ['Booking']
    #swagger.security = [{ "bearerAuth": [] }]
    */);
router.get('/my_tickets', bookingController.GetActiveUserTickets
    /*
    #swagger.tags = ['Booking']
    #swagger.security = [{ "bearerAuth": [] }]
    */)
router.get('/:id', bookingController.GetDetailedById
    /*
    #swagger.tags = ['Booking']
    #swagger.security = [{ "bearerAuth": [] }]
    */);
router.post('/', validate(bookingScheme.create), bookingController.Create
    /*
    #swagger.tags = ['Booking']
    #swagger.security = [{ "bearerAuth": [] }]
    */);
router.patch('/:id', validate(bookingScheme.edit), bookingController.EditById
    /*
    #swagger.tags = ['Booking']
    #swagger.security = [{ "bearerAuth": [] }]
    */);
router.delete('/:id', bookingController.CancelBooking
    /*
    #swagger.tags = ['Booking']
    #swagger.security = [{ "bearerAuth": [] }]
    */);

module.exports = router;
