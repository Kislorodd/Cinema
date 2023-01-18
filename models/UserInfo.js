const Sequelize = require('sequelize');
const sequelize = require('../config/DatabaseConfig');

const UserInfo = sequelize.define('user_info', 
{
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
        unique: true,
        field: 'user_id'
    },
    avatar: {
        type: Sequelize.STRING(256),
        allowNull: true,
        unique: false,
        field: 'avatar'
    },
    firstName: {
        type: Sequelize.STRING(30),
        allowNull: false,
        unique: false,
        field: 'first_name'
    },
    birthday: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        unique: false,
        field: 'birthday'
    },
    email: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true,
        field: 'email'
    },
    phone: {
        type: Sequelize.STRING(30),
        allowNull: true,
        unique: false,
        field: 'phone'
    },
    registerAt: {
        type: Sequelize.DATE,
        allowNull: false,
        unique: false,
        field: 'register_at',
        defaultValue: Date.now()
    },
    lastVisitAt: {
        type: Sequelize.DATE,
        allowNull: false,
        unique: false,
        field: 'last_visit_at',
        defaultValue: Date.now()
    }
},
{
    freezeTableName: true, // ? Disable adding 's' suffix to table name
    createdAt: false
}
);

UserInfo.addHook('beforeCreate', (user, options) => {
    user.registerAt = Date.now();
    user.lastVisitAt = Date.now();
    user.updatedAt = Date.now();
});

UserInfo.addHook('beforeUpdate', (user, options) => {
    user.updatedAt = Date.now();
})

module.exports = UserInfo;