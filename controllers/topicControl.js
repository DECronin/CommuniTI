const express = require('express');
const db = require('../models');

const router = express.Router();

router.get('/', (req, res) => {
    db.Burger.findAll({}).then(burgers => {
        res.render('index', {burgers});
    });
});;

router.post('/api/burger', (req, res) => {
    db.Burger.create({burger_name: req.body.name}).then(() => {
        res.redirect('/');
    });
});

router.put('/api/burger/:id', (req, res) => {
    db.Burger.update({devoured: true}, {
        where: {
            id: req.params.id
        }
    }).then(() => {
        res.end();
    });
});
