const sequelize = require('../database/Database');
const Movie = require('../models/Movie');
const User = require('../models/User');

class ReviewRepository {
    async GetAll() {
        return await sequelize.models.review.findAll();
    }

    async GetDetailedById(reviewId) {
        return await sequelize.models.review.findOne({
            include: [Movie, User],
            where: {
                id: reviewId
            }
        });
    }

    async Create(review) {
        return sequelize.models.review.create(review);
    }

    async EditById(reviewId, review) {
        await sequelize.models.review.update(review, {
            where: {
                id: reviewId
            }
        });

        return await this.GetDetailedById(reviewId);
    }

    async DeleteById(reviewId) {
        await sequelize.models.review.destroy({
            where: {
                id: reviewId
            }
        });
    }
}

module.exports = new ReviewRepository();
