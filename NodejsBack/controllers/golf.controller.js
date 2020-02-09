const Golf = require('../models/golf.model');
const bcrypt = require('bcrypt');

exports.create = (req, res, err) => 
{
    const golf = new Golf({
        title: req.body.title,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        description: req.body.description,
        // manager: req.body.manager
    })
    golf.save()
    .then(data => 
        {
            res.send(data);
        })
    .catch(err =>
        {
            res.status(500).send(
                {
                    message: err.message
                }
            )
        })
    
}

exports.findAll = (req, res) => {
    Golf.find()
    .then( golfs => {
        res.send(golfs);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "some error occured while fetching golfs"
        })
    })
}

exports.findOne = (req, res) => {
    Golf.findById(req.params.id)
    .then( golf => {
        res.send(golf);
    })
    .catch((err => {
        res.status(500).send({
            message: err.message
        })
    }))
    
}

exports.updateOne = (req, res) => {
    Golf.findByIdAndUpdate(req.params.id, req.body)
    .then( golf => {
        res.send(golf);
    })
    .catch((err => {
        res.status(500).send({
            message: err.message
        })
    }))
}

exports.deleteOne = (req, res) => {
    Golf.findByIdAndDelete(req.params.id)
    .then( golf => {
        res.send(golf);
    })
    .catch((err => {
        res.status(500).send({
            message: err.message
        })
    }))
}

exports.deleteAll = (req, res) => {
    Golf.remove()
    .then( golf => {
        res.status(200).send({
            message: "tous les golfs ont bien été supprimés"
        })
    })
    .catch((err) => {
        res.status(500).send({
            message: err.message
        })
    })
}