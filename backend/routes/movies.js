const express = require ('express');
const { getMovies, getSingleMovies } = require('../controllers/moviesControllers');
const router = express.Router();

router.route('/movies').get(getMovies);
router.route('/movies/:id').get(getSingleMovies);

module.exports=router;