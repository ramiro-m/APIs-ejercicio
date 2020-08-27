const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviesController');

router.get('/', moviesController.getAll);
router.get('/:id', moviesController.getById);
router.get('/create', moviesController.create);

module.exports = router;

