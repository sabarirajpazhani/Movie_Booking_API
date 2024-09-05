const moviesModel=require("../models/moviesModel")

exports.getMovies = async(req,res,next)=>{

    const movies = await moviesModel.find({});

    res.json({
        movies
    })
}

exports.getSingleMovies = async(req,res,next)=>{
    try{
        const movieID = await moviesModel.findById(req.params.id);

        res.json({
            movieID
        })
    }
    catch(error){
        res.status(404).json({
            success:false,
            message: "Unable to ge the Movie with the ID"
        })
    }
}


    

    