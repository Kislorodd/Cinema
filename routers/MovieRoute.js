const express = require('express');
const router = express.Router();

const validate = require('../middleware/Validate');
const movieScheme = require('../schemes/MovieScheme');

const movieController = require('../controllers/MovieController');
const mongoLogger = require("../utils/MongoLogger");

const multer = require('multer');
const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, callback) {
            callback(null, '../uploads/posters');
        },
        filename: function (req, file, callback) {
            callback(null, Date.now() + file.originalname.substring(file.originalname.lastIndexOf('.')));
        }
    }),
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter(req, file, callback) {
        if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
            callback(null, true);
        }
        else {
            callback(null, false);
        }
    }
});

router.use(mongoLogger.LogHttpEvent);
router.get('/', movieController.GetAll
    /*
    #swagger.tags = ['Movies']
    #swagger.security = [{ "bearerAuth": [] }]
    */);
router.get('/soon', movieController.GetSoon
    /*
    #swagger.tags = ['Movies']
    #swagger.security = [{ "bearerAuth": [] }]
    */);
router.get('/:id', movieController.GetDetailedById
    /*
    #swagger.tags = ['Movies']
    #swagger.security = [{ "bearerAuth": [] }]
    */);
router.post('/', validate(movieScheme.create), movieController.CreateOne
    /*
    #swagger.tags = ['Movies']
    #swagger.security = [{ "bearerAuth": [] }]
    */);
router.put('/posters/:id', upload.single('poster'), movieController.SetPosterById
    /*
    #swagger.tags = ['Movies']
    #swagger.security = [{ "bearerAuth": [] }]
    */);
router.get('/posters/:id', movieController.GetPoster
    /*
    #swagger.tags = ['Movies']
    #swagger.security = [{ "bearerAuth": [] }]
    */);
router.patch('/:id', validate(movieScheme.edit), movieController.EditById
    /*
    #swagger.tags = ['Movies']
    #swagger.security = [{ "bearerAuth": [] }]
    */);
router.delete('/:id', movieController.DeleteById
    /*
    #swagger.tags = ['Movies']
    #swagger.security = [{ "bearerAuth": [] }]
    */);

module.exports = router;
