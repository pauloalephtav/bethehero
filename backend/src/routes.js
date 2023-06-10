const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
const routes = express.Router();

//Lista todas as ONGS
routes.get('/ongs', OngController.index);
// Create ONG
routes.post('/ongs', OngController.create);

//Cria uma session
routes.post('/sessions', SessionController.create);

//Lista todas os Casos de uma determinada ong
routes.get('/profile', ProfileController.index);

//Lista todas os Casos
routes.get('/incidents', IncidentController.index);
// Create Casos
routes.post('/incidents', IncidentController.create);
// Delete case
routes.delete('/incidents/:id', IncidentController.delete);


module.exports = routes;