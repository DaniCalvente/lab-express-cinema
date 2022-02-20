const express = require('express');
const router = express.Router();
const Movies = require("../models/Movie.model")

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get("/movies", (req, res, next) => {
    // buscar nombres e imagenes de las peliculas
    Movies.find()
    .then((response) => {
        console.log(response);
        res.render("movies.hbs", {response})
    })
    .catch((err) => {

    })

    // mostrar una vista al cliente con los nombres y las imagenes
})

router.get("/movie/:id", (req, res, next) => {

    Movies.findById( req.params.id)
    .then((response) => {
      console.log(response);
      res.render("movie-details.hbs", {response})
    })
    .catch((err) => {
      next(err)
    })
  })

module.exports = router;
