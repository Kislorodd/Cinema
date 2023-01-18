const express = require('express');
const router = express.Router();

const validate = require('../middleware/Validate');
const ticketScheme = require('../schemes/TicketScheme');

const isAuthorize = require('../middleware/IsAuthorize');

const ticketController = require('../controllers/TicketController');
const mongoLogger = require("../utils/MongoLogger");

router.use(mongoLogger.LogHttpEvent);
router.get('/', ticketController.GetAll
    /*
    #swagger.tags = ['Tickets']
    #swagger.security = [{ "bearerAuth": [] }]
    */);
router.get('/seance/:id', ticketController.GetBySeanceId
    /*
    #swagger.tags = ['Tickets']
    #swagger.security = [{ "bearerAuth": [] }]
    */)
router.get('/:id', ticketController.GetDetailedById
    /*
    #swagger.tags = ['Tickets']
    #swagger.security = [{ "bearerAuth": [] }]
    */);
router.use(isAuthorize);
router.post('/', validate(ticketScheme.create), ticketController.Create
    /*
    #swagger.tags = ['Tickets']
    #swagger.security = [{ "bearerAuth": [] }]
    */);
router.patch('/:id', validate(ticketScheme.edit), ticketController.EditById
    /*
    #swagger.tags = ['Tickets']
    #swagger.security = [{ "bearerAuth": [] }]
    */);
router.delete('/:id', ticketController.DeleteById
    /*
    #swagger.tags = ['Tickets']
    #swagger.security = [{ "bearerAuth": [] }]
    */);

module.exports = router;
