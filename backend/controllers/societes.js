const Societes = require('../models/societes');

// get all Societe
exports.all = ((req, res) => {
  Societes.find()
        .then(societes => res.status(200).json(societes))
        .catch(err => res.status(400).json({ message: err.message }));
});

// get a Societe by id
exports.get = ((req, res, next) => {
  Societes.findOne({ _id: req.params.id })
      .then(societes => res.status(200).json(societes))
      .catch(error => res.status(404).json({ message: error.message }));
  });

// store a new Societe
exports.create = (req, res, next) => {
  const societes = new Societes({
    ...req.body
  });
  societes.save()
    .then(() => res.status(201).json({ message: 'Societe created  !'}))
    .catch(error => res.status(400).json({ error }));
}

// update a Societe by id
exports.update = (req, res, next) => {
    Societes.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Societe updated !'}))
    .catch(error => res.status(400).json({ error }));
}

// delete a Societe by id
exports.delete = (req, res, next) => {
    Societes.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Societe deleted !'}))
    .catch(error => res.status(400).json({ error }));
}