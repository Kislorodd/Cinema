const seanceService = require('../services/SeanceService');

class SeanceController {
    async GetAll(req, res) {
        res.send(await seanceService.GetAll());
    }

    async GetRepertoire(req, res) {
        res.send(await seanceService.GetRepertoire(
            req.query.from,
            req.query.to
        ))
    }

    async GetDetailedById(req, res) {
        res.send(await seanceService.GetDetailedById(req.params.id))
    }

    async Create(req, res) {
        let seance = {
            hallId: req.body.hallId,
            movieId: req.body.movieId,
            date: req.body.date
        };

        res.send(await seanceService.CreateOne(seance));
    }

    async EditById(req, res) {
        let seance = {
            hallId: req.body.hallId,
            movieId: req.body.movieId,
            date: req.body.date
        };

        res.send(await seanceService.EditById(req.params.id, seance));
    }

    async DeleteById(req, res) {
        await seanceService.DeleteById(req.params.id);
        res.send('Ok');
    }
}

module.exports = new SeanceController();
