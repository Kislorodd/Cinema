const seanceRepository = require('../repositories/SeanceRepository');
const hallRepository = require('../repositories/HallRepository');
const placeRepository = require('../repositories/PlaceRepository');
const ticketRepository = require('../repositories/TicketRepository');
const {exist} = require("joi");
const date = require('date-and-time')

class SeanceService {
    async GetAll() {
        return await seanceRepository.GetAll();
    }

    async GetRepertoire(from, to) {
        let repertoire = await seanceRepository.GetRepertoire(from, to);
        let halls = [];
        repertoire.forEach((seance) => {
            let hall = halls.find(hall => hall.id === seance.hallId);

            if (!hall) {
                hall = seance.hall;
                hall.rows = seance.hall.rows;
                hall.seats = seance.hall.seats;
                hall.seances = [];
                halls.push(hall);
            }

            // seance.hallId = undefined;
            seance.hall = undefined;


            // seance.movie.genre = seance.movie.genre.name;
            // seance.movie.country = seance.movie.country.name;
            // seance.date = date.format(seance.date,'YYYY-MM-DD HH:mm');

            hall.seances.push(seance);
        })

        return halls;
    }

    async GetDetailedById(seanceId) {
        return await seanceRepository.GetDetailedById(seanceId);
    }

    async CreateOne(seanceData) {
        let seance = await seanceRepository.Create(seanceData);
        let hallPlaces = await placeRepository.GetPlacesByHallId(seance.hallId);

        hallPlaces.forEach(place => {
            let ticket = {
                seanceId: seance.id,
                placeId: place.id,
                cost: parseFloat((Math.random() * (5 - 3) + 3).toFixed(1))
                    + (place.isVip ? 3 : 0),
                isOccupied: false
            }

            ticketRepository.Create(ticket)
        })

        return seance;
    }

    async EditById(seanceId, seance) {
        return await seanceRepository.EditById(seanceId, seance);
    }

    async DeleteById(seanceId) {
        return await seanceRepository.DeleteById(seanceId);
    }
}

module.exports = new SeanceService();
