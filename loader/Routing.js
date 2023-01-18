// ErrorHandler

const express = require('express');
const router = express.Router();


const userRouter = require('../routers/UserRoute');
const roleRouter = require('../routers/RoleRoute');
const movieRouter = require('../routers/MovieRoute');
const seanceRouter = require('../routers/SeanceRoute');
const hallRouter = require('../routers/HallRoute');
const placeRouter = require('../routers/PlaceRoute');
const ticketRouter = require('../routers/TicketRoute');
const bookingRouter = require('../routers/BookingRoute');
const reviewRouter = require('../routers/ReviewRoute');

// /signup
// /signin
// use is authorized

router.use('/users', userRouter);
router.use('/roles', roleRouter);
// router.use('/countries', countryRouter);
// router.use('/genres', genreRouter);
router.use('/movies', movieRouter);
router.use('/seances', seanceRouter);
router.use('/halls', hallRouter);
router.use('/places', placeRouter);
router.use('/tickets', ticketRouter);
router.use('/booking', bookingRouter);
router.use('/reviews', reviewRouter);


module.exports = router;
