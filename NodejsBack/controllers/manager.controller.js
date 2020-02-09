const Manager = require('../models/manager.model');
const bcrypt = require('bcrypt');

exports.create = (req, res) => {
        const manager = new Manager({
                lastname: req.body.lastname,
                firstname: req.body.firstname,
                email: req.body.email,
                telephone: req.body.telephone
            
            })
            // if (err.error) {
            //     res.send(err);
            // } else {
        manager.save()
            .then(data => {
                res.send(data);
            }).catch(err => {
                res.status(500).send({
                    message: err.message
                })
            })
    }
    // get all managers
exports.findAll = (req, res) => {
    Manager.find()
        .then(managers => {
            res.send(managers);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occured when finding managers."
            })
        })
}

exports.findOne = (req, res) => {
    console.log(req.params);
    Manager.findById(req.params.id)
        .then(manager => {
            if (!manager) {
                return res.status(404).send({
                    message: "Manager not found with id" + req.params.id
                });
            }
            res.send(manager);
        })
        .catch(err => {
            return res.status(500).send({
                message: err.message
            })
        })
}

exports.updateOne = (req, res) => {
    Manager.findByIdAndUpdate(
        req.params.id,
        req.body
    ).then(manager => {
        if (!manager) {
            return res.status(404).send({
                message: "Manager not found"
            })
        }
        // res.send(manager);
        Manager.findById(req.params.id)
            .then(newManager => {
                res.send({
                    new_manager: newManager,
                    old_manager: manager
                });
            })
    }).catch(err => {
        return res.status(500).send({
            message: err.message
        })
    })
}

exports.deleteOne = (req, res) => {
    Manager.findByIdAndDelete(req.params.id)
    .then( manager => {
        res.send(manager);
    })
    .catch((err => {
        res.status(500).send({
            message: err.message
        })
    }))
}

exports.deleteAll = (req, res) => {
    Manager.remove()
    .then( manager => {
        res.status(200).send({
            message: "tous les managers ont bien été supprimés"
        })
    })
    .catch((err) => {
        res.status(500).send({
            message: err.message
        })
    })
}
