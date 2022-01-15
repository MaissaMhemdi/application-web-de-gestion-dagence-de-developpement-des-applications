const express = require('express');
const router = express.Router();

const developpeurController = require('./../controllers/developpeurs');

router.get('/', developpeurController.all);
router.get('/:id', developpeurController.get);
router.post('/', developpeurController.create);
module.exports = router;