const mongoose = require('mongoose');

const filmschema = mongoose.schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: String,
    year: Number,
    rated: String,
    runtime: Number,
    countries: String,
    genres: String,
    director: String,
    writers: String,
    actors: String,
    plot: string,
    poster: String, Number,
    imbd: String,
    tomato: String,
    metacritic: Number,
    awards: String,
    type: String

});

module.exports = mongoose.model('Film', filmSchema);