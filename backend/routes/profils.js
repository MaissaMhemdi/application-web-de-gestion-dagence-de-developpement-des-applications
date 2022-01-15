const express = require('express');
const router = express.Router();

const profilController = require('./../controllers/profils');

router.get('/', profilController.all);
router.get('/:id', profilController.get);
router.post('/', profilController.create);
module.exports = router;