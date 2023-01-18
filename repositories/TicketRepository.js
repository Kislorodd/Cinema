const Seance = require('../models/Seance');
const Place = require('../models/Place');
const Ticket = require('../models/Ticket');

class TicketRepository {
    async GetAll() {
        return await Ticket.findAll();
    }

    async GetDetailedById(ticketId) {
        return await Ticket.findOne({
            include: [Seance, Place],
            where: {
                id: ticketId
            }
        });
    }

    async GetBySeanceId(seanceId) {
        return await Ticket.findAll({
            where: {
                seanceId: seanceId
            }
        })
    }

    async GetById(ticketId) {
        return await Ticket.findOne({
            where: {
                id: ticketId
            }
        })
    }

    async Create(ticket) {
        return Ticket.create(ticket); // await redundant because is async method and create also async method
    }

    async EditById(ticketId, ticket) {
        await Ticket.update(ticket, {
            where: {
                id: ticketId
            }
        });

        return await this.GetDetailedById(ticketId);
    }

    async DeleteById(ticketId) {
        await Ticket.destroy({
            where: {
                id: ticketId
            }
        });
    }

    async GetOneByQuery(query) {
        return await Ticket.findOne({ where: query })
    }
}

module.exports = new TicketRepository();
