const Joi = require('joi');

const PlaceScheme = {
    create: Joi.object().keys(
        {
            hallId: Joi.number()
                .integer()
                .required(),

            seat: Joi.number()
                .integer()
                .required(),

            row: Joi.number()
                .integer()
                .required(),

            isVip: Joi.boolean()
                .required()
        }
    ),

    edit: Joi.object().keys(
        {
            hallId: Joi.number()
                .integer(),

            seat: Joi.number()
                .integer(),

            row: Joi.number()
                .integer(),

            isVip: Joi.boolean()
        }
    )
};

module.exports = PlaceScheme;
