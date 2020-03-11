const db = require('../models');

module.exports = {
    // render list of topics' links
    findTopics: function (req, res) {
        db.Topics.findAll({}).then(data => {
           res.json(data);
        });
    },

    // render list of threads from topicId{ where: { topic_id: req.params.id } }
    findThreads: function (req, res) {
        db.Threads.findAll().then(data => {
            res.json(data);
        });
    },

    // post new thread
    newThread(req, res) {
        console.log(`api/thread post req.body::\n${req.body}`);
        // db.Threads.create({
        //     title: req.body.title,
        //     stance: req.body.stance,
        //     summary: req.body.summary,
        //     status: 'posted'
        // }).then(data => {
        //     for(i = 0; i < req.body.topicIDs; i++){
        //         db.TopicThreads.create({
        //             thread_id: data.id,
        //             topic_id: req.body.topicIDs[i]
        //         }).catch(err => {
        //             console.error(err);
        //             process.exit(1);
        //         });
        //     }
        //     res.json({msg: 'associations made'})
        // });
        res.json({msg: 'debugging'})
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
            stance: inputsData.stance || 3,
            summary: inputsData.comment,
            username: inputsData.username,
            thread_id: inputsData.thread_id,
            user_id: inputsData.user_id,
            status: 'posted'
        }).then(comData => {
            if (inputsData.dataResourceInputs){
                for(i = 0; i < inputsData.dataResourceInputs.length; i++){
                    let resource = inputsData.dataResourceInputs[i];
                    // check if url exists in db.Resources
                    db.Resources.findAll({where: {url: resource.url}}).then(resData => {
                        if(!resData.length){
                            db.Resources.create(resource).then(result => {
                                db.CommentResources.create({
                                    resource_id: result.id,
                                    comment_id: comData.id
                                }).catch(err => {
                                        console.error(err);
                                        process.exit(1);
                                    });
                            })
                        } else {
                            db.CommentResources.create({
                                resource_id: resData[0].id,
                                comment_id: comData.id
                            }).catch(err => {
                                    console.error(err);
                                    process.exit(1);
                                });
                        }
                    })
                }
                res.json({msg: 'associations made'})
            } else {
                res.json({msg: 'error - no resources to support comment'})
            }
        });
    },

    // ALL_UPDATES and NEW_TOPIC ARE FOR FUTURE DEVELOPMENT
    // update comment
    // "report" status updated through body?
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
    // params: key and value for source: admin vs comment_resources
    findResources: function (req, res) {
        db.Resources.findAll({}).then(data => {
            res.json(data);
        });
    },

    // post new resource
    newResource: function (req, res) {
        db.Resources.create(req.body).then(data => {
            res.json(data);
        });
    },

    // update resource
    // "report" status updated through body?
    updateResource: function (req, res) {
        console.log(`api/resource update req.body::\n${req.body}`);
        db.Resources.update({}, {
            where: {
                id: req.params.id
            }
        }).then(data => {
            res.json(data);
        });
    },

    // find user by id
    findUser: function (req, res) {
        let key = req.params.key;
        let value = req.params.value;
        console.log(`----------\nkey:: ${key}\nvalue:: ${value}\n--------`)
        db.Users
            .findAll({where: {[key]: value}})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    // post new user
    newUser: function (req, res) {
        console.log(`================\nCREATing:new\nreq.body::\n${JSON.stringify(req.body)}\n=================`);
        db.Users
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    
    // update user
    // [report, inavtive, additional settings, ect] status updated through body?
    updateUser: function (req, res) {
        console.log(`================\nupdating: ${req.params.id}\nreq.body::\n${JSON.stringify(req.body)}\n=================`);
        db.Users
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
}