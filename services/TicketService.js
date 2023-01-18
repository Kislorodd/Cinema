const ticketRepository = require('../repositories/TicketRepository');
const BadRequestError = require("../errors/BadRequestError");
const NotFoundError = require("../errors/NotFoundError");

class TicketService {
    async GetAll() {
        return await ticketRepository.GetAll();
    }

    async GetDetailedById(ticketId) {
        return await ticketRepository.GetDetailedById(ticketId);
    }

    async GetBySeanceId(seanceId) {
        let tickets = await ticketRepository.GetBySeanceId(seanceId);
        if (tickets.length < 1) {
            throw new NotFoundError('Tickets not found');
        }
        return tickets;
    }

    async Create(ticket) {
        if (await ticketRepository.GetOneByQuery(ticket)) {
            throw new BadRequestError('Ticket already exists');
        }

        return await ticketRepository.Create(ticket);
    }

    async EditById(ticketId, ticket) {
        return await ticketRepository.EditById(ticketId, ticket);
    }

    async DeleteById(ticketId) {
        return await ticketRepository.DeleteById(ticketId);
    }
}

module.exports = new TicketService();
