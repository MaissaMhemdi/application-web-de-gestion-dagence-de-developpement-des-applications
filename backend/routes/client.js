const express = require('express');
const client = require('../models/client');
const router = express.Router();

const clientController = require('./../controllers/clients');

router.get("/:_id", (req, res)=>{
    let {_id} = req.params
    client.find({_id})
        .then(client=>res.send(user))
        .catch(err => console.log(err))
});
router.delete("/:_id", (req, res)=>{
    let {_id} = req.params
    client.findByIdAndDelete({_id})
        .then(()=>res.send("client has been deleted"))
        .catch(err => console.log(err))
});
router.put("/:_id", (req, res)=>{
    let {_id} = req.params
    client.findByIdAndUpdate({_id}, {$set:{...req.body}})
    .then(()=>res.send("client has been updated"))
    .catch(err => console.log(err))
});
module.exports = router;