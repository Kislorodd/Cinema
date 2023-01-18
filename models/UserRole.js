const Sequelize = require('sequelize');
const sequelize = require('../config/DatabaseConfig');

const UserRole = sequelize.define('users_role', {
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
    roleId: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        unique: false,
        field: 'role_id'
    }
},
{
    timestamps: false
});

module.exports = UserRole;