const express = require("express");
const router = express.Router();
const cors = require('cors');

const corsOptions = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
    'optionsSuccessStatus': 200
}
router.use('*', cors(corsOptions));

module.exports = router;
