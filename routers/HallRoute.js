const express = require('express');
const router = express.Router();

const validate = require('../middleware/Validate');
const hallScheme = require('../schemes/HallScheme');

const isAuthorize = require('../middleware/IsAuthorize');

const hallController = require('../controllers/HallController');
const mongoLogger = require("../utils/MongoLogger");

router.use(mongoLogger.LogHttpEvent);
router.get('/', hallController.GetAll
    /*
    #swagger.tags = ['Halls']
    #swagger.security = [{ "bearerAuth": [] }]
    */);
router.get('/:id', hallController.GetById
    /*
    #swagger.tags = ['Halls']
    #swagger.security = [{ "bearerAuth": [] }]
    */);
router.use(isAuthorize);
router.post('/', validate(hallScheme.create), hallController.CreateOne
    /*
    #swagger.tags = ['Halls']
    #swagger.security = [{ "bearerAuth": [] }]
    */);
router.patch('/:id', validate(hallScheme.edit), hallController.EditById
    /*
    #swagger.tags = ['Halls']
    #swagger.security = [{ "bearerAuth": [] }]
    */);
router.delete('/:id', hallController.DeleteById
    /*
    #swagger.tags = ['Halls']
    #swagger.security = [{ "bearerAuth": [] }]
    */);

module.exports = router;
