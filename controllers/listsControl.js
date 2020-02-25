// const express = require('express');
const db = require('../models');
// const router = express.Router();

module.exports = {
    findTopics: function (req, res) {
        // render list or topics' links
        db.Topic.findAll({}).then(data => {
            res.json(data);
        });
    },

    // render list of threads from topicId
    findThreads: function (req, res) {
        db.Thread.findAll({ where: { topic_id: req.params.id } }).then(data => {
            res.json(data);
        });
    },

    // post new thread
    newThread(req, res) {
        console.log(`api/thread post req.body::\n${req.body}`);
        db.Thread.create({
            title: req.body.title,
            stance: req.body.stance,
            summary: req.body.summary,
            status: 'posted'
        }).then(data => {
            res.json(data);
        });
    },

    // render comments for thread
    findComments: function (req, res) {
        db.Comment.findAll({ where: { thread_id: req.params.id } }).then(data => {
            res.json(data);
        });
    },

    // post new comment
    newComment: function (req, res) {
        // console.log(`CONTROLLER CONNECTION `);
        // console.log(`api/comment post req.body::\n${req.body}`);
        // db.Comment.create({
        //     title: req.body.title,
        //     stance: req.body.stance,
        //     summary: req.body.summary,
        //     status: 'posted'
        // }).then(data => {
        //     res.json(data);
        // });
        res.status(200).json({messege: "New Comment Sent"})
    },

    // update comment
    // report status updated through body?
    updateComment: function (req, res) {
        console.log(`api/comment update req.body::\n${req.body}`);
        db.Comment.update({}, {
            where: {
                id: req.params.id
            }
        }).then(data => {
            res.json(data);
        });
    },


    // render resources list
    findResources: function (req, res) {
        db.Resource.findAll({}).then(data => {
            res.json(data);
        });
    },

    // post new resource
    newResource: function (req, res) {
        console.log(`api/resource post req.body::\n${req.body}`);
        db.Resource.create({
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
        db.Resource.update({}, {
            where: {
                id: req.params.id
            }
        }).then(data => {
            res.json(data);
        });
    }
}