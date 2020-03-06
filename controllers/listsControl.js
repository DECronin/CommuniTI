// const express = require('express');
const db = require('../models');
// const router = express.Router();

module.exports = {
    // render list of topics' links
    findTopics: function (req, res) {
        db.Topics.findAll({}).then(data => {
            res.json(data);
        });
    },

    // render list of threads from topicId
    findThreads: function (req, res) {
        db.Threads.findAll({ where: { topic_id: req.params.id } }).then(data => {
            res.json(data);
        });
    },

    // post new thread
    newThread(req, res) {
        console.log(`api/thread post req.body::\n${req.body}`);
        db.Threads.create({
            title: req.body.title,
            stance: req.body.stance,
            summary: req.body.summary,
            status: 'posted'
        }).then(data => {
            res.json(data);
        });
    },

    // render comments for thread{ where: { thread_id: req.params.id } }
    findComments: function (req, res) {
        db.Comments.findAll().then(data => {
            res.json(data);
        });
    },

    // post new comment
    newComment: function (req, res) {
        const inputsData = req.body;
        db.Comments.create({
            title: inputsData.title,
            stance: inputsData.stance,
            summary: inputsData.comment,
            status: 'posted'
        }).then(data => res.json(data));
    },

    // update comment
    // report status updated through body?
    updateComment: function (req, res) {
        console.log(`api/comment update req.body::\n${req.body}`);
        db.Comments.update({}, {
            where: {
                id: req.params.id
            }
        }).then(data => {
            res.json(data);
        });
    },


    // render resources list
    findResources: function (req, res) {
        db.Resources.findAll({}).then(data => {
            res.json(data);
        });
    },

    // post new resource
    newResource: function (req, res) {
        console.log(`api/resource post req.body::\n${req.body}`);
        db.Resources.create({
            title: req.body.title,
            stance: req.body.stance,
            category: '',
            additional: '',
            url: '',
            publisher: '',
            author: '',
            status: ''
        }).then(data => {
            res.json(data);
        });
    },

    // update resource
    // report status updated through body?
    updateResource: function (req, res) {
        console.log(`api/resource update req.body::\n${req.body}`);
        db.Resources.update({}, {
            where: {
                id: req.params.id
            }
        }).then(data => {
            res.json(data);
        });
    }
}