const express = require('express');
const router = express.Router();
const generoController = require('../controllers/generoController');


router.post('/', generoController.create);
router.get('/', generoController.getAll);
router.get('/:id', generoController.getById);


module.exports = router;
