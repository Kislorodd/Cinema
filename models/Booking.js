const Sequelize = require('sequelize');
const sequelize = require('../config/DatabaseConfig');

const Booking = sequelize.define('booking', {
    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true,
        field: 'id'
    },
    userId: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        unique: false,
        field: 'user_id'
    },
    ticketId: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        unique: true,
        field: 'ticket_id'
    }
},
{
    updatedAt: false,
    freezeTableName: true
});

module.exports = Booking;