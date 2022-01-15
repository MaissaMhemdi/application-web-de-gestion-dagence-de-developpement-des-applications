exports.all = ((req, res) => {
    Client.find()
        .then(clients => res.status(200).json(clients))
        .catch(err => res.status(400).json({ message: err.message }));
});

exports.get = ((req, res, next) => {
    Client.findOne({ _id: req.params.id })
        .then(clients => res.status(200).json(clients))
        .catch(error => res.status(404).json({ message: error.message }));
});

// store a new clinet
exports.create = (req, res, next) => {
    const clients = new Client({
        ...req.body
    });
    Client.save()
        .then(() => res.status(201).json({ message: 'Client created  !' }))
        .catch(error => res.status(400).json({ error }));
}