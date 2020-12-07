const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const filmRoutes = require('./api/routes/films');

app.use('/films', filmRoutes);


mongoose.connect(
    'mongodb+srv://node-film:' + 
    process.env.MONGO_ATLAS_PW + 
    'node-film@cluster0.vqq3h.mongodb.net/<dbname>?retryWrites=true&w=majority',
    { 
        useMongoClient: true
    }

  );

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) => {
   res.status(error.status || 500);
   res.json({
       error: {
           message: error.message
       }
   });
});


module.exports = app; 