const axios = require('axios');
const Developer = require('../models/Developer');
const { convertStringToArray } = require('../utils/converter');
const { findConnections, sendMessage } = require('../websocket');

const store = async (request) => {
    const { github_username, techs, latitude, longitude } = request.body;

    let developer = await Developer.findOne({ github_username });

    if (!developer) {
        const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
        const { name = login, avatar_url, bio } = apiResponse.data;

        const technologies = convertStringToArray(techs);

        const location = {
            type: 'Point',
            coordinates: [longitude, latitude]
        };

        developer = await Developer.create({
            github_username,
            name,
            avatar_url,
            biograpy: bio,
            technologies,
            location
        });

        const sendSocketMessageTo = findConnections({ latitude, longitude }, technologies);
        sendMessage(sendSocketMessageTo, 'newDeveloper', developer);
    }
    return developer;
}

const findAll = async () => {
    return await Developer.find();
}

module.exports = { store, findAll };