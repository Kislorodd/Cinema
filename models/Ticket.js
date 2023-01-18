const Sequelize = require('sequelize');
const sequelize = require('../config/DatabaseConfig');

const Ticket = sequelize.define('ticket', {
    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true,
        field: 'id'
    },
    seanceId: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        unique: false,
        field: 'seance_id'
    },
    placeId: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        unique: false,
        field: 'place_id'
    },
    cost: {
        type: Sequelize.FLOAT,
        allowNull: false,
        unique: false,
        field: 'cost'
    },
    isOccupied: {
        type: Sequelize.BOOLEAN,
        default: false,
        allowNull: false,
        unique: false,
        field: 'is_occupied'
    }
},
{
    timestamps: false
});

module.exports = Ticket;
