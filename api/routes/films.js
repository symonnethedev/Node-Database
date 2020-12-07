const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const film = require('./models/film');

const Film = require|('../models/film');

exports.films = async (res, res, next) => {
    try {
        const { page = 1, limit = 10 } = req.query;
        const films = await films.find().limit(limit *1).skip((page-1)*limit);
        res.status(200).json({ total: film.length, films });
    } catch (error) {
        console.log(err);
        res.status(500).json({
            error: err
        });
    }
};

router.get('/', (req, res, next) => {
    film.find()
    .exec()
    .then(docs => {
        console.log(docs);
        if (docs.length >= 0) {
            res.status(200).json(docs); 
        } else {
            res.status(404).json({
                message: 'No entries found'
            });   

        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
    });
  });
});

router.post('/', (req, res, next) => {
    const product = new Film({
        _id: new mongoose.Types.ObjectId(),
        title: req.body.name,
        year: req.body.year,
        rated: req.body.rated,
        runtime: req.body.runtime,
        countries: req.body.countries,
        genres: req.body.genres,
        director: req.body.directors,
        writers: req.body.writers,
        actors: req.body.actors,
        plot: req.body.plot,
        poster: req.body.poster,
        imbd: req.body.imbd,
        tomato: req.body.tomato,
        metacritic: req.body.metacritic,
        awards: req.body.awards,
        type: req.body.type
    });
    film
     .save()
     .then(result => {
        console.log(result);
    })
    .catch(err => console.log|(err));
    res.status(200).json({
        message: 'Handling Post Requests to /films',
        createdFilm: film
    });
});

router.get('/:filmId', (req, res, next) => {
    const id = req.params.filmId;
    if (id === 'special') {
    res.status(200).json({
        message: 'You discovered the special ID'
    });
    } else {
        res.status(200).json({
            message: 'You passed an ID'
        });
    }
});


router.patch('/:filmId', (req, res, next) => {
    const id = req.params.filmId;
  const updateOps = {};
  for (const ops of req.body) {
    updateOps[ops.propTitle] = ops.value;
  }
  film.update({ _id: id }, { $set: updateOps })
  .exec()
  .then(result => {
    console.log(result);
    res.status(200).json(result);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({
      error: err
    });
  });
});

router.delete('/:filmId', (req, res, next) => {
    const id =req.params.productId;
    film.remove({_id: id})
    .exec()
    .then(result => {
        res.status(200).json(result);
    })
       .catch(err => {
       res.status(500).json({
           error:err
        });
     });
});

module.exports = router;