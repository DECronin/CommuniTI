const db = require("../models");

module.exports = {
    findAll: function (req, res, next) {
        console.log(`db =;= models =;=; find all`);
        db.Users
            .findAll({where: {username: req.body.username}})
            .then(dbModel => {
                console.log(`findAllUsers::\n${req}\n${dbModel}`)
                // if(dbModel){
                //     if(dbModel.validPassword(req.body.password)){
                //         req.user = dbModel;
                //         next()
                //     }
                // }
            })
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.Users
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        console.log(`================\nCREATing:new\nreq.body::\n${JSON.stringify(req.body)}\n=================`);
        // db.Users
        //     .create(req.body)
        //     .then(dbModel => res.json(dbModel))
        //     .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        console.log(`================\nupdating: ${req.params.id}\nreq.body::\n${JSON.stringify(req.body)}\n=================`);
        // db.Users
        //     .findOneAndUpdate({ _id: req.params.id }, req.body)
        //     .then(dbModel => res.json(dbModel))
        //     .catch(err => res.status(422).json(err));
    }
};
