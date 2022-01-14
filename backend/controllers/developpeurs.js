const Developpeur = require('./../models/developpeur');

exports.all = ((req, res) => {
    Developpeur.find()
        .then(developpeurs => res.status(200).json(developpeurs))
        .catch(err => res.status(400).json({ message: err.message }));
});

exports.get = ((req, res, next) => {
    Developpeur.findOne({ _id: req.params.id })
        .then(developpeur => res.status(200).json(developpeur))
        .catch(error => res.status(404).json({ message: error.message }));
});

// store a new developpeur
exports.create = (req, res, next) => {
    const developpeur = new Developpeur({
        ...req.body
    });
    developpeur.save()
        .then(() => res.status(201).json({ message: 'developpeur created succesfully  !' }))
        .catch(error => res.status(400).json({ error }));
}

exports.update = (req, res, next) => {
    Developpeur.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Developpeur updated !'}))
      .catch(error => res.status(400).json({ error }));
  }
  
  // delete a course by id
  exports.delete = (req, res, next) => {
    Developpeur.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Developpeur deleted !'}))
      .catch(error => res.status(400).json({ error }));
  }