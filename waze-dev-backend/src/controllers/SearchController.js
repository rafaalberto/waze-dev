const SearchService = require('../services/SearchService');

module.exports = {
    async search(request, response) {
        const result = await SearchService.search(request, response);
        return response.json(result);
    }
}