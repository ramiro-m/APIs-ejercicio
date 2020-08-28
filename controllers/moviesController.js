
const db =require('../database/models');

module.exports = {
    getAll: function(req, res) {
        db.Movie.findAll()
        .then(function(result) {
           var metaData = {
                meta: {
                status: "ok, salio joya",
                total: result.length
                },
                data: result
            };
            return res.status(200).json(metaData)
        })

    },

    getById: function(req, res) {
        db.Movie.findByPk(req.params.id)
        .then(function(result) {
            return res.status(200).json(result)
            })
    },

    create: function(req,res) {
        db.Movie.create({
            title: req.body.title,
            rating: req.body.rating,
            release_date: req.body.release_date,
            awards: req.body.awards,
            length: req.body.length,
            genre_id: req.body.genre_id
        })
            
        .then(function(result) {
            return res.status(201).json(result)
         })
    }
    
};