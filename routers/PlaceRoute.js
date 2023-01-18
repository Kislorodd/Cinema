const express = require('express');
const router = express.Router();

const validate = require('../middleware/Validate');
const placeScheme = require('../schemes/PlaceScheme');

const isAuthorize = require('../middleware/IsAuthorize');

const placeController = require('../controllers/PlaceController');
const mongoLogger = require("../utils/MongoLogger");

router.use(mongoLogger.LogHttpEvent);
router.get('/', placeController.GetAll
    /*
    #swagger.tags = ['Places']
    #swagger.security = [{ "bearerAuth": [] }]
    */);
router.get('/:id', placeController.GetPlacesByHallId
    /*
    #swagger.tags = ['Places']
    #swagger.security = [{ "bearerAuth": [] }]
    */);
router.use(isAuthorize);
router.post('/', validate(placeScheme.create), placeController.Create
    /*
    #swagger.tags = ['Places']
    #swagger.security = [{ "bearerAuth": [] }]
    */);
router.patch('/:id', validate(placeScheme.edit), placeController.EditById
    /*
    #swagger.tags = ['Places']
    #swagger.security = [{ "bearerAuth": [] }]
    */);
router.delete('/:id', placeController.DeleteById
    /*
    #swagger.tags = ['Places']
    #swagger.security = [{ "bearerAuth": [] }]
    */);

module.exports = router;
