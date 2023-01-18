const placeService = require('../services/PlaceService');

class PlaceController {
    async GetAll(req, res) {
        res.send(await placeService.GetAll());
    }

    async GetDetailedById(req, res) {
        res.send(await placeService.GetDetailedById(req.params.id))
    }

    async GetPlacesByHallId(req, res) {
        res.send(await placeService.GetPlacesByHallId(req.params.id))
    }

    async Create(req, res) {
        let place = {
            hallId: req.body.hallId,
            seat: req.body.seat,
            row: req.body.row,
            isVip: req.body.isVip
        };

        res.send(await placeService.Create(place));
    }

    async EditById(req, res) {
        let place = {
            hallId: req.body.hallId,
            seat: req.body.seat,
            row: req.body.row,
            isVip: req.body.isVip
        };

        res.send(await placeService.EditById(req.params.id, place));
    }

    async DeleteById(req, res) {
        await placeService.DeleteById(req.params.id);
        res.send('Ok');
    }
}

module.exports = new PlaceController();
