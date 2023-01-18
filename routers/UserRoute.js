const express = require('express');
const router = express.Router();

const validate = require('../middleware/Validate');
const userScheme = require('../schemes/UserScheme');

const isAuthorize = require('../middleware/IsAuthorize');

const userController = require('../controllers/UserController');
const mongoLogger = require("../utils/MongoLogger");

const multer = require('multer');
const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, callback) {
            callback(null, '../uploads/avatars');
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

router.post('/login', validate(userScheme.login), userController.Login);
router.post('/register', validate(userScheme.create), userController.Register);
router.use(isAuthorize);
router.use(mongoLogger.LogHttpEvent);
router.get('/', userController.GetAll
    /*
    #swagger.tags = ['Users']
    #swagger.security = [{ "bearerAuth": [] }]
    */);
router.post('/avatar', upload.single('avatar'), userController.SetAvatarByCurrentUser)
router.get('/avatar', userController.GetAvatarByCurrentUser)
router.get('/user', userController.GetCurrentUser)
router.patch('/update', validate(userScheme.edit), userController.UpdateCurrentUser)
router.get('/:id', userController.GetById
    /*
    #swagger.tags = ['Users']
    #swagger.security = [{ "bearerAuth": [] }]
    */);
router.patch('/:id', validate(userScheme.edit), userController.EditById
    /*
    #swagger.tags = ['Users']
    #swagger.security = [{ "bearerAuth": [] }]
    */);
router.delete('/:id', userController.DeleteById
    /*
    #swagger.tags = ['Users']
    #swagger.security = [{ "bearerAuth": [] }]
    */);

module.exports = router;
