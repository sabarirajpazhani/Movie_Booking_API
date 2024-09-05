const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema({
    movieId: mongoose.Schema.Types.ObjectId,
    userName: String,
    seats: Number
});

const bookingModel =  mongoose.model('Booking', bookingSchema)

module.exports = bookingModel;