const bookingRepository = require('../repositories/BookingRepository');
const ticketRepository = require('../repositories/TicketRepository');
const NotFoundError = require("../errors/NotFoundError");

class BookingService {
    async GetAll() {
        return await bookingRepository.GetAll();
    }

    async GetDetailedById(bookingId) {
        return await bookingRepository.GetDetailedById(bookingId);
    }

    async GetDetailedActiveUserTickets(userId) {
        let activeTickets = await bookingRepository.GetDetailedActiveUserTickets(userId);

        activeTickets.forEach(activeTicket => {
            activeTicket.hall = activeTicket.ticket.place.hall;
            activeTicket.ticket.place.hall = undefined;

            activeTicket.place = activeTicket.ticket.place;
            activeTicket.ticket.place = undefined;

            activeTicket.movie = activeTicket.ticket.seance.movie;
            activeTicket.ticket.seance.movie = undefined;

            activeTicket.seance = activeTicket.ticket.seance;
            activeTicket.ticket.seance = undefined;
        })

        return activeTickets;
    }

    async Create(bookingData) {
        let ticket = await ticketRepository.GetById(bookingData.ticketId);
        if (!ticket) {
            throw new NotFoundError('Ticket not found');
        }
        let booking = await bookingRepository.Create(bookingData);

        await ticketRepository.EditById(booking.ticketId, {
            isOccupied: true
        })

        return booking;
    }

    async DeleteByQuery(bookingData) {
        let ticket = await ticketRepository.GetById(bookingData.ticketId);
        if (!ticket) {
            throw new NotFoundError('Ticket not found');
        }

        await bookingRepository.DeleteByQuery(bookingData);

        await ticketRepository.EditById(ticket.id, {
            isOccupied: false
        })

        return true;
    }

    async EditById(bookingId, booking) {
        return await bookingRepository.EditById(bookingId, booking);
    }

    async DeleteById(bookingId) {
        let booking = await bookingRepository.GetById(bookingId);
        if (booking) {
            let ticketId = booking.ticketId;
            await bookingRepository.DeleteById(bookingId);

            await ticketRepository.EditById(ticketId, {
                isOccupied: true
            })
        }
        else {
            throw new NotFoundError('Booking is not found');
        }
    }
}

module.exports = new BookingService();
