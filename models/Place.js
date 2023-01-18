const Sequelize = require('sequelize');
const sequelize = require('../config/DatabaseConfig');

const Place = sequelize.define('place', {
    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true,
        field: 'id'
    },
    hallId: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        unique: false,
        field: 'hall_id'
    },
    seat: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: false,
        field: 'seat'
    },
    row: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: false,
        field: 'row'
    },
    isVip: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        unique: false,
        field: 'is_vip',
        defaultValue: false
    }
},
{
    timestamps: false
});

module.exports = Place;
