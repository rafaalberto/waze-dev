const DeveloperService = require('../services/DeveloperService');

module.exports = {
    async store(request, response) {
        const result = await DeveloperService.store(request);
        return response.json(result);
    },
    async findAll(request, response) {
        const result = await DeveloperService.findAll();
        return response.json(result);
    }
}

