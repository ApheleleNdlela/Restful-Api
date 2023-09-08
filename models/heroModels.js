const mongoose = require('mongoose');

const heroSchema = new mongoose.Schema({

    fname: {type: String, 
        required: true},
    strength: {type: String, 
        required: true},
    weakness: {type: String, 
        required: true}
});

module.exports = mongoose.model('hero', heroSchema);