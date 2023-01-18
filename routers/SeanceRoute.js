const express = require('express');
const router = express.Router();

const validate = require('../middleware/Validate');
const seanceScheme = require('../schemes/SeanceScheme');

const isAuthorize = require('../middleware/IsAuthorize');
const mongoLogger = require("../utils/MongoLogger");

const seanceController = require('../controllers/SeanceController');


router.use(mongoLogger.LogHttpEvent);
router.get('/', seanceController.GetAll
    /*
    #swagger.tags = ['Seances']
    #swagger.security = [{ "bearerAuth": [] }]
    */);
router.get('/repertoire', seanceController.GetRepertoire
    /*
    #swagger.tags = ['Seances']
    #swagger.security = [{ "bearerAuth": [] }]
    */);
router.get('/:id', seanceController.GetDetailedById
    /*
    #swagger.tags = ['Seances']
    #swagger.security = [{ "bearerAuth": [] }]
    */);
router.use(isAuthorize);
router.post('/', validate(seanceScheme.create), seanceController.Create
    /*
    #swagger.tags = ['Seances']
    #swagger.security = [{ "bearerAuth": [] }]
    */);
router.patch('/:id', validate(seanceScheme.edit), seanceController.EditById
    /*
    #swagger.tags = ['Seances']
    #swagger.security = [{ "bearerAuth": [] }]
    */);
router.delete('/:id', seanceController.DeleteById
    /*
    #swagger.tags = ['Seances']
    #swagger.security = [{ "bearerAuth": [] }]
    */);

module.exports = router;
