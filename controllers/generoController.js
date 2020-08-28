const db =require('../database/models');

module.exports = {
    getAll: function(req, res) {
        db.Genre.findAll()
        
        .then(function(lapapa) {
            //console.log(lapapa)//pa' pispiar
            return res.status(200).json(lapapa)
        })

    },

    getById: function(req, res) {
        db.Genre.findByPk(req.params.id)
        .then(function(lapapa) {
            return res.status(200).json(lapapa)
            })
    },

    create: function(req,res) {
        db.Genre.create( {
            name: req.body.name,
            ranking: req.body.ranking,
            active: req.body.active
        })
            
        .then(function(lapapa) {
            return res.status(201).json(lapapa)
         })
    }
    
};