const sequelize = require('../database/Database');

const Movie = require('../models/Movie');
const Hall = require('../models/Hall');
const Seance = require('../models/Seance');
const {Op} = require("sequelize");

class SeanceRepository {
    async GetAll() {
        return await sequelize.models.seance.findAll();
    }

    async GetRepertoire(from, to) {
        return await Seance.findAll({
            raw: true,
            nest: true,
            include: [
                {
                    model: Hall,
                    as: 'hall'
                },
                {
                    model: Movie,
                    as: 'movie',
                }
            ],
            where: {
                date: {
                    [Op.between]: [from, to]
                }
            },
            order: [
                ['date', 'ASC']
            ]
        })
    }

    async GetDetailedById(seanceId) {
        return await sequelize.models.seance.findOne({
            include: [Movie, Hall],
            where: {
                id: seanceId
            }
        });
    }

    async Create(seance) {
        return sequelize.models.seance.create(seance);
    }

    async EditById(seanceId, seance) {
        await sequelize.models.seance.update(seance, {
            where: {
                id: seanceId
            }
        });

        return await this.GetDetailedById(seanceId);
    }

    async DeleteById(seanceId) {
        await sequelize.models.seance.destroy({
            where: {
                id: seanceId
            }
        });
    }
}

module.exports = new SeanceRepository();
