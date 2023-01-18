const swaggerAutogen = require('swagger-autogen')({openapi: '3.0.0'});

const doc = {
    info: {
        version: '',      // by default: '1.0.0'
        title: 'Cinema API',        // by default: 'REST API'
        description: 'Web application for cinema operation',  // by default: ''
    },
    host: '',      // by default: 'localhost:3000' -- NO! by default empty (but used current host)!
    basePath: '',  // by default: '/'
    schemes: [],   // by default: ['http']
    consumes: [],  // by default: ['application/json']
    produces: [],  // by default: ['application/json']
    tags: [        // by default: empty Array
        {
            name: 'Users',         // Tag name
            description: 'Users API',  // Tag description
        },
        {
            name: 'Tickets',         // Tag name
            description: 'Tickets API',  // Tag description
        },
        {
            name: 'Seances',         // Tag name
            description: 'Seances API',  // Tag description
        },
        {
            name: 'Roles',         // Tag name
            description: 'Roles API',  // Tag description
        },
        {
            name: 'Reviews',         // Tag name
            description: 'Reviews API',  // Tag description
        },
        {
            name: 'Places',         // Tag name
            description: 'Places API',  // Tag description
        },
        {
            name: 'Movies',         // Tag name
            description: 'Movies API',  // Tag description
        },
        {
            name: 'Halls',         // Tag name
            description: 'Halls API',  // Tag description
        },
        {
            name: 'Genres',         // Tag name
            description: 'Genres API',  // Tag description
        },
        {
            name: 'Countries',         // Tag name
            description: 'Countries API',  // Tag description
        },
        {
            name: 'Booking',         // Tag name
            description: 'Booking API',  // Tag description
        }
        // { ... }
    ],
    securityDefinitions: {
        bearerAuth: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT'
        }
    },  // by default: empty object (Swagger 2.0)
    definitions: {},          // by default: empty object
    components: {}            // by default: empty object (OpenAPI 3.x)
};


const outputFile = 'src/swagger/swagger.json';
const endpointsFiles = ['./src/loader/Routing.js'];

/* NOTE: if you use the express Router, you must pass in the
   'endpointsFiles' only the root file where the route starts,
   such as: index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc);