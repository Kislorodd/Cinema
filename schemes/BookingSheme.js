const Joi = require('joi');

const BookingScheme = {
    create: Joi.object().keys(
        {
            ticketId: Joi.number()
                .integer()
                .required()
        }
    ),

    edit: Joi.object().keys(
        {
            ticketId: Joi.number()
                .integer()
        }
    )
};

module.exports = BookingScheme;