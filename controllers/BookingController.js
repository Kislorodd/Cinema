const bookingService = require('../services/BookingService');

class BookingController {
    async GetAll(req, res) {
        res.send(await bookingService.GetAll());
    }

    async GetDetailedById(req, res) {
        res.send(await bookingService.GetDetailedById(req.params.id))
    }

    async Create(req, res) {
        let booking = {
            userId: req.user.id,
            ticketId: req.body.ticketId
        };

        res.send(await bookingService.Create(booking));
    }

    async CancelBooking(req, res) {
        let booking = {
            userId: req.user.id,
            ticketId: req.params.id
        };

        res.send(await bookingService.DeleteByQuery(booking));
    }

    async EditById(req, res) {
        let booking = {
            userId: req.body.userId,
            ticketId: req.body.ticketId
        };

        res.send(await bookingService.EditById(req.params.id, booking));
    }

    async DeleteById(req, res) {
        await bookingService.DeleteById(req.params.id);
        res.send('Ok');
    }

    async GetActiveUserTickets(req, res) {
        let userId = req.user.id;

        res.send(await bookingService.GetDetailedActiveUserTickets(userId));
    }
}

module.exports = new BookingController();
