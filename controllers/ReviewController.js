const reviewService = require('../services/ReviewService');

class ReviewController {
    async GetAll(req, res) {
        res.send(await reviewService.GetAll());
    }

    async GetDetailedById(req, res) {
        res.send(await reviewService.GetDetailedById(req.params.id))
    }

    async Create(req, res) {
        let review = {
            movieId: req.body.movieId,
            userId: req.user.id,
            rating: req.body.rating,
            review: req.body.review
        };

        res.send(await reviewService.CreateOne(review));
    }

    async EditById(req, res) {
        let review = {
            movieId: req.body.movieId,
            userId: req.user.id,
            rating: req.body.rating,
            review: req.body.review
        };

        res.send(await reviewService.EditById(req.params.id, review));
    }

    async DeleteById(req, res) {
        await reviewService.DeleteById(req.params.id);
        res.send('Ok');
    }
}

module.exports = new ReviewController();
