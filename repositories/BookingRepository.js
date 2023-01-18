const User = require('../models/User');
const Ticket = require('../models/Ticket');
const Booking = require('../models/Booking');
const Place = require('../models/Place');
const Seance = require('../models/Seance');
const Movie = require('../models/Movie');
const Hall = require('../models/Hall');
const {Op} = require("sequelize");


class BookingRepository {
    async GetAll() {
        return await Booking.findAll();
    }

    async GetDetailedById(bookingId) {
        return await Booking.findOne({
            include: [User, Ticket],
            where: {
                id: bookingId
            }
        });
    }

    async GetDetailedActiveUserTickets(userId) {
        return await Booking.findAll({
            raw: true,
            nest: true,
            where: { userId: userId },
            include: [{
                model: Ticket,
                include: [
                    {
                        model: Place,
                        include: [{
                            model: Hall
                        }]
                    },
                    {
                        model: Seance,
                        include: [{
                            model: Movie
                        }],
                        where: {
                            date: {
                                [Op.gte]: new Date()
                            }
                        }
                    }
                ]
            }]
        });
    }

    async GetById(bookingId) {
        return await Booking.findOne({
            where: {
                id: bookingId
            }
        });
    }

    async Create(booking) {
        return Booking.create(booking);
    }

    async EditById(bookingId, booking) {
        await Booking.update(booking, {
            where: {
                id: bookingId
            }
        });

        return await this.GetDetailedById(bookingId);
    }

    async DeleteById(bookingId) {
        await Booking.destroy({
            where: {
                id: bookingId
            }
        });
    }

    // query { userId: 1, ticketId: 1 }
    async DeleteByQuery(query) {
        await Booking.destroy({
            where: query
        });
    }
}

module.exports = new BookingRepository();
