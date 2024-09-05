exports.getMovies = (req,res,next)=>{
    res.json({
        success: true,
        message: "Get Movie is Working"
    })
}

exports.getSingleMovies = (req,res,next)=>{
    res.json({
        success: true,
        message: "Get Single Movie is Working"
    })
}