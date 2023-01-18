// Connect to database
const sequelize = require('../config/DatabaseConfig');

// Loading Models //
const user       = require('../models/User');
const userInfo   = require('../models/UserInfo');
const userRole   = require('../models/UserRole');
const role       = require('../models/Role');
// const country   = require('../models/Countries');
// const genre      = require('../models/Genre');
const movie      = require('../models/Movie');
const review     = require('../models/Review');
const hall       = require('../models/Hall');
const place      = require('../models/Place');
const seance     = require('../models/Seance');
const ticket     = require('../models/Ticket');
const booking    = require('../models/Booking');

// User Info
user.hasOne(userInfo, { foreignKey: 'userId', as: 'UserInfo' });
userInfo.belongsTo(user, { foreignKey: 'userId' });

// Users roles 
user.belongsToMany(role, { through: 'users_roles' });
role.belongsToMany(user, { through: 'users_roles' });

// Movies 
// movie.belongsTo(genre);
// genre.hasMany(movie);
//
// movie.belongsTo(country);
// country.hasMany(movie);

// Reviews
review.belongsTo(movie);
movie.hasMany(review);

review.belongsTo(user);
user.hasMany(review);

// Seanses
seance.belongsTo(hall);
hall.hasMany(seance);

seance.belongsTo(movie);
movie.hasMany(seance);

// Places
place.belongsTo(hall);
hall.hasMany(place);

// Tickets
ticket.belongsTo(seance);
seance.hasMany(ticket);

ticket.belongsTo(place);
place.hasMany(ticket);

// Booking
booking.belongsTo(user);
user.hasMany(booking);

booking.belongsTo(ticket);
ticket.hasMany(booking);

sequelize.sync().then(result => {
    // console.log(result);
}).catch(err => console.log(err));

sequelize.authenticate()
    .then(() => console.log('Successful connection to the database'))
    .catch(e => console.log('Failed connection to the database. Exception: ' + e));

module.exports = sequelize;