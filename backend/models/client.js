const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
    nom: { type: String, required: true },
    prenom: { type: String, required: true },
    mail: { type: String, required: true },

});

module.exports = mongoose.model('Client', clientSchema);