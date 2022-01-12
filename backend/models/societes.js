const mongoose = require('mongoose');

const societeSchema = new mongoose.Schema({
    tel: {type: String, required: true},
    description: {type: String, required: true},
    image: {type: String, required: true},
    nom: {type: String, required: true},
    date: {type: Date, required: true},
    email: {type: String, required: true},
    categorie: {type: Number, required: true},
});

module.exports = mongoose.model('Societe', societeSchema);