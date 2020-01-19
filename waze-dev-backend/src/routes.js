const { Router } = require('express');
const DeveloperController = require('./controllers/DeveloperController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

routes.get('/developers', DeveloperController.findAll)
routes.post('/developers', DeveloperController.store);
routes.get('/search', SearchController.search);

module.exports = routes;