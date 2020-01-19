const mongoose = require('mongoose');
const PointSchema = require('../utils/PointSchema');

const DeveloperSchema = new mongoose.Schema({
    name: String,
    github_username: String,
    biography: String,
    avatar_url: String,
    technologies: [String],
    location: {
        type: PointSchema,
        index: '2dsphere'
    }
});

module.exports = mongoose.model('Developer', DeveloperSchema);