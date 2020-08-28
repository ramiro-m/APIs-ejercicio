const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviesController');

router.get('/', moviesController.getAll);
router.post('/', moviesController.create);

router.get('/:id', moviesController.getById);

module.exports = router;

