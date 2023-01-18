
process.env.TZ = "Europe/Moscow";
const express = require('express');
const app = express();

const asyncRouter = require('async-express-router')
asyncRouter(app);
const mongo = require('./mongo/Mongo');

const loader = require('./loader');
app.use(loader);
app.get("/", (req, res) => {
    res.status(200).json({ message: "Success" });
    }); 

app.listen(8080, () => console.log('Server is started'));
