const mongoose = require('mongoose');

const developpeurSchema = new mongoose.Schema({
    nom: { type: String, required: true },
    prenom: { type: String, required: true },
    image: { type: String, required: true },
    tel: { type: String, required: true },
    mail: { type: String, required: true },
    adresse: { type: String, required: true },
    description: { type: String, required: true },
    competences: { type: String, required: true },
});

module.exports = mongoose.model('Developpeur', developpeurSchema);