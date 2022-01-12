const Categorie = require('./../models/categorie');

exports.all = ((req, res) => {
    Course.find()
        .then(categories => res.status(200).json(categories))
        .catch(err => res.status(400).json({ message: err.message }));
});

exports.get = ((req, res, next) => {
    Categorie.findOne({ _id: req.params.id })
        .then(categorie => res.status(200).json(categorie))
        .catch(error => res.status(404).json({ message: error.message }));
});

// store a new categorie
exports.create = (req, res, next) => {
    const categorie = new Categorie({
        ...req.body
    });
    categorie.save()
        .then(() => res.status(201).json({ message: 'Categorie created  !' }))
        .catch(error => res.status(400).json({ error }));
}