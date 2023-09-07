const express = require('express');
const router = express.Router();
const heroController = require('../controllers/heroControllers');

router.post('/', heroController.createHero);
router.get('/', heroController.getAllHeroes);

module.exports = router;