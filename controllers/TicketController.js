const ticketService = require('../services/TicketService');

class TicketController {
    async GetAll(req, res) {
        res.send(await ticketService.GetAll());
    }

    async GetDetailedById(req, res) {
        res.send(await ticketService.GetDetailedById(req.params.id))
    }

    async GetBySeanceId(req, res) {
        res.send(await ticketService.GetBySeanceId(req.params.id))
    }

    async Create(req, res) {
        let ticket = {
            seanceId: req.body.seanceId,
            placeId: req.body.placeId,
            cost: req.body.cost,
            //isOccupied: req.body.isOccupied
        };

        res.send(await ticketService.Create(ticket));
    }

    async EditById(req, res) {
        let ticket = {
            seanceId: req.body.seanceId,
            placeId: req.body.placeId
        };

        res.send(await ticketService.EditById(req.params.id, ticket));
    }

    async DeleteById(req, res) {
        await ticketService.DeleteById(req.params.id);
        res.send('Ok');
    }
}

module.exports = new TicketController();
