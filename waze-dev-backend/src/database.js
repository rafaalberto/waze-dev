const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:admin@cluster0-yhezt.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

module.exports = mongoose;