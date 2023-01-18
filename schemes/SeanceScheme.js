const Joi = require('joi');

const SeanceScheme = {
    create: Joi.object().keys(
        {
            hallId: Joi.number().integer()
                .required(),

            movieId: Joi.number().integer()
                .required(),

            date: Joi.date().required()
        }
    ),

    edit: Joi.object().keys(
        {
            hallId: Joi.number().integer(),

            movieId: Joi.number().integer(),

            date: Joi.date()
        }
    )
};

module.exports = SeanceScheme;
