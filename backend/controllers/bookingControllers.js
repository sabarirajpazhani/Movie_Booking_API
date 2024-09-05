exports.getBooking=(req,res,next)=>{
    res.json({
        success:true,
        message:"Post Booking is working"
    })
}

exports.getBookingCancel=(req,res,next)=>{
    res.json({
        success:true,
        message:"Post Booking Cancel is working"
    })
}