const Joi = require('joi');

const HallScheme = {
    create: Joi.object().keys(
        {
            name: Joi.string()
                .max(30)
                .required(),

            rows: Joi.number().required(),
            seats: Joi.number().required()
        }
    ),

    edit: Joi.object().keys(
        {
            name: Joi.string()
                .max(30),

            rows: Joi.number(),
            seats: Joi.number()
        }
    )
};

module.exports = HallScheme;
