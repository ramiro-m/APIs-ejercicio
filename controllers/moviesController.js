
const db =require('../database/models');

module.exports = {
    getAll: function(req, res) {
        db.Movie.findAll()
        .then(function(result) {
            return res.status(200).json(result)
        })

    },

    getById: function(req, res) {
        db.Movie.findByPk(req.params.id)
        .then(function(result) {
            return res.status(200).json(result)
            })
    },

    create: function(req, res) {
        db.Movie.create( {
            id: req.body.id,
            title: req.body.title,
            type: req.body.type,
            rating: req.body.rating,
            release_date: req.body.release_date,
            awards: req.body.awars,
            length: req.body.length,
            genre_id: req.body.genre_id
        })

    .then(function(result) {
        return res.status(201).json(result)
    })
}}