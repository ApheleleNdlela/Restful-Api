const express = require('express');
const router = express.Router();
const heroController = require('../controllers/heroControllers');

router.post('/', heroController.createHero);
router.get('/', heroController.getAllHeroes);
router.put('/:id', heroController.update);
router.delete('/:id', heroController.deleteOne)

module.exports = router;