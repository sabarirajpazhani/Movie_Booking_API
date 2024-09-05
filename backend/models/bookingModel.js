const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema({
    movieId:mongoose.Schema.Type.ObjectID,
    userName: String,
    seats: Number
});

const bookingModel =  mongoose.model('Booking', bookingSchema)

module.exports = bookingModel;