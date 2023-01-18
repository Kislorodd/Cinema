const sequelize = require('sequelize');
const Hall = require('../models/Hall');

class HallRepository {
    async GetAll() {
        return await Hall.findAll();
    }

    async GetById(hallId) {
        return await Hall.findOne({
            where: {
                id: hallId
            }
        })
    }

    async Create(hall) {
        return Hall.create(hall)
    }

    async EditById(hallId, hall) {
        await Hall.update(hall, {
            where: {
                id: hallId
            }
        });

        return await this.GetById(hallId);
    }

    async DeleteById(hallId) {
        await sequelize.models.movie.destroy({
            where: {
                id: hallId
            }
        });
    }

    async IncreaseSeatById(hallId, inc = 1) {
        await Hall.update(
            { placeCount: sequelize.literal(`place_count + ${inc}`) },
            { where: { id: hallId }}
        );
    }

    async DecreaseSeatById(hallId, dec = 1) {
        await Hall.update(
            { placeCount: sequelize.literal(`place_count - ${dec}`) },
            { where: { id: hallId }}
        );
    }
}

module.exports = new HallRepository();
