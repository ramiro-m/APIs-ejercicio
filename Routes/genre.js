const express = require('express');
const router = express.Router();
const generoController = require('../controllers/generoController');

router.get('/', generoController.getAll);
router.get('/:id', generoController.getById);
router.get('/create', generoController.create);

module.exports = router;
