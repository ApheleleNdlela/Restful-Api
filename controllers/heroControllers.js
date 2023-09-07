const hero = require('../models/heroModels');

exports.createHero = async (req, res) => {
   
    try{
        const newHero = new hero(req.body);
        const savedHero = await newHero.save();
        res.status(201).json(savedHero);
    }   catch (error) {
        res.status(500).json({error: 'Hero could not be created'});
    }
};

exports.getAllHeroes = async (req, res) => {
   
    try{
        const heroes = await hero.find();
        res.status(200).json(heroes)
    }   catch (error) {
        res.status(500).json({error: 'hero was not found or check your spelling'});
    }
    
};