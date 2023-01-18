const Joi = require('joi');

const ReviewScheme = {
    create: Joi.object().keys(
        {
            movieId: Joi.number().integer()
                .required(),

            rating: Joi.number()
                .required(),

            review: Joi.string(),
        }
    ),

    edit: Joi.object().keys(
        {
            movieId: Joi.number().integer(),

            rating: Joi.number(),

            review: Joi.string(),
        }
    )
};

module.exports = ReviewScheme;