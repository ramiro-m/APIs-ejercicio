const express = require('express');
const app = express ();
const cors = require('cors');

const moviesRouter = require ('./routes/movies');
const genreRouter = require ('./routes/genre');

app.use(cors())
app.use('/movies', moviesRouter);
app.use('/genre', genreRouter);

app.listen(3000, function() {
    
    console.log('pelicula en http://localhost:3000/movies/');
    console.log('genero en http://localhost:3000/genre/')
})
