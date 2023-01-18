const movieRepository = require('../repositories/MovieRepository');
const path = require('path');
const fs = require('fs');
const NotFoundError = require("../errors/NotFoundError");

class MovieService {
    async GetAll() {
        return await movieRepository.GetAll();
    }

    async GetDetailedById(movieId) {
        let movie = await movieRepository.GetDetailedById(movieId);
        if (!movie) {
            throw new NotFoundError('No such movie');
        }

        return movie;
    }

    async GetSoon() {
        return await movieRepository.GetSoon();
    }

    async Create(movie) {
        return await movieRepository.Create(movie);
    }

    async EditById(movieId, movie) {
        return await movieRepository.EditById(movieId, movie);
    }

    async DeleteById(movieId) {
        return await movieRepository.DeleteById(movieId);
    }

    async SetPosterById(movieId, file) {
        if (!file) {
            throw new Error("Poster is empty");
        }
        let movie = await movieRepository.GetById(movieId);

        if (movie) {
            if (movie.poster !== 'poster.jpg') {
                // try to delete movie poster
                fs.unlink(`${file.destination}/${movie.poster}`, (err) => {});
            }
            return await movieRepository.EditById(movieId, {poster: file.filename});
        }
        else {
            fs.unlink(file.path, (error) => {
                if (error) {
                    throw new Error("Uploaded image could not be deleted");
                }
            });

            throw new NotFoundError('No such movie');
        }
    }

    async GetPosterById(movieId) {
        let movie = await movieRepository.GetById(movieId);
        if (movie) {
            return path.join(`${__dirname}/../../uploads/posters/${movie.poster}`);
        }
        else {
            throw new NotFoundError('No such movie');
        }
    }
}

module.exports = new MovieService();
