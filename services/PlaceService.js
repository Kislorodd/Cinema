const placeRepository = require('../repositories/PlaceRepository');
const hallRepository = require('../repositories/HallRepository');
// errors //
const NotFoundError = require('../errors/NotFoundError');
const BadRequestError = require('../errors/BadRequestError');

class PlaceService {
    async GetAll() {
        return await placeRepository.GetAll();
    }

    async GetDetailedById(placeId) {
        return await placeRepository.GetDetailedById(placeId);
    }

    async GetPlacesByHallId(hallId) {
        return await placeRepository.GetPlacesByHallId(hallId);
    }

    async Create(place) {
        if (await placeRepository.GetOneByQuery(
            {
                hallId: place.hallId,
                seat: place.seat,
                row: place.row,
            }
        )) {
            throw new BadRequestError('Place already exists');
        }

        let hall = await hallRepository.GetById(place.hallId);
        if (!hall) {
            throw new BadRequestError('Hall is not exists');
        }

        if (place.row > hall.rows || place.seat > hall.seats) {
            throw new BadRequestError('Incorrect place (check seat/row)');
        }

        place = await placeRepository.Create(place);

        return place
    }

    async EditById(placeId, place) {
        return await placeRepository.EditById(placeId, place);
    }

    async DeleteById(placeId) {
        let place = await placeRepository.GetById(placeId);
        console.log(place)
        if (place) {
            await placeRepository.DeleteById(placeId);
        }
        else {
            throw new NotFoundError('No such place')
        }
    }
}

module.exports = new PlaceService();
