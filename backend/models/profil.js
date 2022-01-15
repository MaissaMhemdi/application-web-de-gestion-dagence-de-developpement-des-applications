const mongoose = require('mongoose');

const profilSchema = new mongoose.Schema({
    nom: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },

});

module.exports = mongoose.model('Profil', profilSchema);