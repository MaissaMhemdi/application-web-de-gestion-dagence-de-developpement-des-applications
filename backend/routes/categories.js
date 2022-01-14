const express = require('express');
const router = express.Router();

const categorieController = require('./../controllers/categories');

router.get('/', categorieController.all);
router.get('/:id', categorieController.get);
router.post('/', categorieController.create);
module.exports = router;