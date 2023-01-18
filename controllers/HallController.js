const hallService = require('../services/HallService');

class HallController {
    async GetAll(req, res) {
        res.send(await hallService.GetAll());
    }

    async GetById(req, res) {
        res.send(await hallService.GetById(req.params.id))
    }

    async CreateOne(req, res) {
        let hall = {
            name: req.body.name,
            rows: req.body.rows,
            seats: req.body.seats
        };

        res.send(await hallService.CreateOne(hall));
    }

    async EditById(req, res) {
        let hall = {
            name: req.body.name,
            rows: req.body.rows,
            seats: req.body.seats
        };

        res.send(await hallService.EditById(req.params.id, hall));
    }

    async DeleteById(req, res) {
        await hallService.DeleteById(req.params.id);
        res.send('Ok');
    }
}

module.exports = new HallController();
