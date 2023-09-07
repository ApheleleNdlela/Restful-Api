const mongoose = require('mongoose');

const heroSchema = new mongoose.Schema({

    fname: {type: String, 
        require: true},
    strength: {type: String, 
        require: true},
    weakness: {type: String, 
        require: true}
});

module.exports = mongoose.model('hero', heroSchema);