const mongoose = require('mongoose');

const moviesSchema = new mongoose.Schema({
    title: String,
    availableSeats: Number
})

const moviesModel = mongoose.model('Movies', moviesSchema);
module.exports = moviesModel;