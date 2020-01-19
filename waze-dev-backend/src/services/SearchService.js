const axios = require('axios');
const Developer = require('../models/Developer');
const { convertStringToArray } = require('../utils/converter');

const search = async (request, response) => {
    const { latitude, longitude, techs } = request.query;
    const techsArray = convertStringToArray(techs);
    const developers = await Developer.find({
        technologies: {
            $in: techsArray,
        },
        location: {
            $near: {
                $geometry: {
                    type: 'Point',
                    coordinates: [longitude, latitude],
                },
                $maxDistance: 10000
            },
        },
    });
    return developers;
}

module.exports = { search };