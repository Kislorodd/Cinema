const Sequelize = require('sequelize');
const sequelize = require('../config/DatabaseConfig');

const Hall = sequelize.define('hall', {
    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true,
        field: 'id'
    },
    name: {
        type: Sequelize.STRING(30),
        allowNull: false,
        unique: true,
        field: 'name'
    },
    rows: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        unique: false,
        field: 'rows'
    },
    seats: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        unique: false,
        field: 'seats'
    }

},
{
    timestamps: false
});

module.exports = Hall;
