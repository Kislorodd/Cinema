const Sequelize = require('sequelize');
const MongoLogger = require('./../utils/MongoLogger');

module.exports = new Sequelize('cinema', 'postgres', null, {
    host: 'localhost',
    dialect: 'postgres',
    port: 5432,
    password:'5152',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    logging: (command) => MongoLogger.LogDatabase(command)
});
