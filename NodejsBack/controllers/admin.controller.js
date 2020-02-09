const Admin = require('../models/admin.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.create = (req, res) => {
    let hashedPassword = bcrypt.hashSync(req.body.password, 8);

    const admin = new Admin({
        lastname: req.body.lastname,
        firstname: req.body.firstname,
        role: req.body.role,
        email: req.body.email,
        password: hashedPassword,
        admin: req.body.admin
    })

    admin.save()
        .then(data => {
            let admintoken = jwt.sign({
                    id: admin.email,
                    admin: admin.admin
                },
                "supersecret", {
                    expiresIn: 86400
                }
            )
            res.send({
                auth: true,
                token: admintoken,
                body: {
                    email: data.email,
                    firstname: data.firstname
                }
            });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            })
        })
}

exports.login = (req, res) => {
    //requête pour retrouver un admin en BDD -> findOne
    console.log(req.body);
    Admin.findOne({ email: req.body.email },
        function(err, admin) {
            //si aucun admin
            if (!admin) return res.status(404).send('admin not found');
            //comparaison des mdp
            let passwordIsValid = bcrypt.compareSync(req.body.password, admin.password);
            //check si la comparaison est True
            if (!passwordIsValid) return res.status(401).send({
                auth: false,
                token: null
            });
            //On génère le token grâce à la méthode sign
            let token = jwt.sign({
                    id: admin._id,
                    admin: admin.admin
                },
                "supersecret", {
                    expiresIn: 86400
                }
            );
            res.status(200).send({
                auth: true,
                token: token,
                data: admin
            })
        }
    )
}