const passport = require('./Passport');

module.exports = passport.authenticate('jwt', {session: false});