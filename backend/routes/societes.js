const express = require('express');
const router = express.Router();

const societeController = require('./../controllers/societes');

router.get('/', societeController.all);
router.get('/:id', societeController.get);
router.post('/', societeController.create);
router.put('/:id', societeController.update);
router.delete('/:id', societeController.delete);

module.exports = router;