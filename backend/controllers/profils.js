const Profil = require('./../models/profil');

exports.all = ((req, res) => {
    Profil.find()
        .then(profils => res.status(200).json(profils))
        .catch(err => res.status(400).json({ message: err.message }));
});

exports.get = ((req, res, next) => {
    Profil.findOne({ _id: req.params.id })
        .then(profil => res.status(200).json(profil))
        .catch(error => res.status(404).json({ message: error.message }));
});

// store a new profil
exports.create = (req, res, next) => {
    const profil = new Profil({
        ...req.body
    });
    profil.save()
        .then(() => res.status(201).json({ message: 'profil created  !' }))
        .catch(error => res.status(400).json({ error }));
}