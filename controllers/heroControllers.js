const hero = require('../models/heroModels');

exports.createHero = async (req, res) => {

    if(!req.body){
        res.status(400).send('cannot add without info')
        return;
    }
   
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

exports.update = async (req,res) => {
    if(!req.body){
        res.status(400).send('cannot update Hero')
        return;
    }

    const id = req.params.id

    hero.findByIdAndUpdate(id, req.body)
    .then(data => {
        if(!data) {
            res.status(404).send({
                msg: `cannot update hero with id=${id}`
            })
        }else res.status(201).send ({
            msg:`hero was updated successfully`
        })
 
    })

    // try{
    // const Hero = await hero.findByIdAndUpdate(id, req.body);
    // res.status(200).json(Hero)
    // } catch (error){
    //     res.status(500).json(error, `Can not update a hero with id=${id} ${id}`)
    // }

};

exports.deleteOne = async (req,res) =>{

    const id = req.params.id
    
    try{
        const Hero = await hero.findByIdAndRemove(id);
        res.status(201).send({msg: `hero deleted successfully`})
    }catch(error) {
        res.status(404).send({msg: `hero could not be deleted`})
    }
    
}

exports.getOne = async (req,res) => {

    const id = req.params.id

    try{

        const Hero = await hero.findById(id)
        res.status(201).json(Hero)
    }catch (error) {
        res.status(404).send({error: `hero with id=${id}, was not found, please recheck the id`})
    }
}