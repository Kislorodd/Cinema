const Sequelize = require('sequelize');
const sequelize = require('../config/DatabaseConfig');

const Movie = sequelize.define('movie', {
    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true,
        field: 'id'
    },
    title: {
        type: Sequelize.STRING(256),
        allowNull: false,
        unique: false,
        field: 'title'
    },
    genre: {
        type: Sequelize.STRING(30),
        allowNull: false,
        unique: false,
        field: 'genre'
    },
    poster: {
        type: Sequelize.STRING(256),
        allowNull: true,
        unique: false,
        field: 'poster'
    },
    duration: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        unique: false,
        field: 'duration'
    },
    ageLimit: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: false,
        field: 'age_limit'
    },
    date: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        unique: false,
        field: 'date'
    },
    country: {
        type: Sequelize.STRING(30),
        allowNull: false,
        unique: false,
        field: 'country'
    },
    director: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
        field: 'director'
    },
    actors: {
        type: Sequelize.TEXT,
        allowNull: false,
        unique: false,
        field: 'actors'
    },
    synopsis: {
        type: Sequelize.TEXT,
        allowNull: false,
        unique: false,
        field: 'synopsis'
    },
    youtube: {
        type: Sequelize.TEXT,
        allowNull: false,
        unique: false,
        field: 'youtube'
    },
    startRentalDate: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        unique: false,
        field: 'start_rental_date'
    },
    endRentalDate: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        unique: false,
        field: 'end_rental_date'
    }
});

Movie.addHook('beforeCreate', (user, options) => {
    user.createdAt = Date.now();
    user.updatedAt = Date.now();
});

Movie.addHook('beforeUpdate', (user, options) => {
    user.updatedAt = Date.now();
})

module.exports = Movie;
