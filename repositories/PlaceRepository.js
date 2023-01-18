const Hall = require("../models/Hall");
const Place = require('../models/Place');

class PlaceRepository {
    async GetAll() {
        return await Place.findAll();
    }

    async GetById(placeId) {
        return await Place.findOne({
            where: { id: placeId }
        });
    }

    async GetDetailedById(placeId) {
        return await Place.findOne({
            include: [Hall],
            where: {
                id: placeId
            }
        });
    }

    async GetPlacesByHallId(hallId) {
        return await Place.findAll({
            where: {
                hallId: hallId
            }
        })
    }

    async Create(place) {
        return Place.create(place);
    }

    async EditById(placeId, place) {
        await Place.update(place, {
            where: {
                id: placeId
            }
        });

        return await this.GetDetailedById(placeId);
    }

    async DeleteById(placeId) {
        await Place.destroy({
            where: {
                id: placeId
            }
        });
    }

    async GetOneByQuery(query) {
        return await Place.findOne({ where: query })
    }
}

module.exports = new PlaceRepository();
