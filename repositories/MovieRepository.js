const Movie = require('../models/Movie');
const Hall = require("../models/Hall");
const {Op} = require("sequelize");

class MovieRepository {
    async GetAll() {
        return await Movie.findAll();
    }

    async GetDetailedById(movieId) {
        return await Movie.findOne({
            where: {
                id: movieId
            }
        });
    }

    async GetSoon() {
        return await Movie.findAll({
            where: {
                startRentalDate: {
                    [Op.between]: [new Date(), new Date(new Date().getFullYear(), 11, 31)]
                }
            },
            order: [
                ['date', 'ASC']
            ]
        })
    }

    async GetById(movieId) {
        return await Movie.findOne({
            where: {
                id: movieId
            }
        })
    }

    async Create(movie) {
        return Movie.create(movie);
    }

    async EditById(movieId, movie) {
        await Movie.update(movie, {
            where: {
                id: movieId
            }
        });

        return await this.GetDetailedById(movieId);
    }

    async DeleteById(movieId) {
        await Movie.destroy({
            where: {
                id: movieId
            }
        });
    }
}

module.exports = new MovieRepository();
