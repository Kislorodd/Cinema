const Express = require('./Express');
const Routing = require('./Routing');
const Headers = require('./Headers');
const ErrorHandler = require('../middleware/ErrorHandler');
const Swagger = require('./Swagger');

const swaggerUI = require('swagger-ui-express');
const express = require('express');
const router = express.Router();

router.use('/api-docs', swaggerUI.serve, Swagger)

router.use(Express);

router.use(Headers);

router.use(Routing);
router.use(ErrorHandler);

module.exports = router;
