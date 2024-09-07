//Book a seat for a Movie
const moviesModel = require('../models/moviesModel')
const bookingModel = require('../models/bookingModel')

exports.getBooking=async(req,res,next)=>{
    const {userName, seats}= req.body;
    let movie = await moviesModel.findById(req.params.id);
    
    if(!movie){
        return res.status(404).json({
            message: "Movie not Found"
        })
    }

    if(movie.availableSeats < seats){
        return res.status(400).json({
            message:"Not enough avaible seats"
        })
    }

    movie.availableSeats -=seats;
    await movie.save();
    
    const booking = new bookingModel({
        movieId: movie._id,
        userName,
        seats
    });
    await booking.save();

    res.json({
        message: "Booking Seccessful",
        booking
    });
}



//cancle the booking

exports.getBookingCancel = async (req, res, next) => {
    const { username,  } = req.body; 
    let movie = await moviesModel.findById(req.params.id );
    if (!movie) {
        return res.status(404).json({
            message: "Movie not Found"
        });
    }

    const booking = await bookingModel.findOne({ movieId: movie._id, username });
    if (!booking) {
        return res.status(404).json({
            message: "Booking not Found"
        });
    }

   
    movie.availableSeats += booking.seats;
    await movie.save();

    
    await booking.remove();

    res.json({
        message: "Booking Canceled"
    });
};
