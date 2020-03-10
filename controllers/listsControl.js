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
        let tempThreadTopics = [];
        for(i = 0; i < 7; i++){
            tempThreadTopics[i].topic_id = Math.ceil(Math.random()*45)
        }
        db.Threads.create({
            title: req.body.title,
            stance: req.body.stance,
            summary: req.body.summary,
            status: 'posted'
        }).then(data => {
            for(i = 0; i < 7; i++){
                tempThreadTopics[i].thread_id = data.data.id
            }
            db.TopicThreads.bulkCreate(tempThreadTopics).then(joinData => res.json(joinData))
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
        }).then(data => {
            // let arLength = req.body.resources.lenght;
            let tempCommentResources = [];
            for(i = 0; i < 7; i++){
                // check if url/ect exists in db.Resources
                // db.Resources.create(req.body.resources[i]).then(resData => {
                    // tempCommentResources[i].resource_id = resData.data.id;
                // })
                tempCommentResources[i].resource_id = Math.ceil(Math.random()*45);
                tempCommentResources[i].comment_id = data.data.id
            }

            db.CommentResources.bulkCreate(tempCommentResources).then(joinData => {
                console.log(joinData.result + " C == R records inserted!\n");
                res.json(joinData)
            })
                .catch(err => {
                    console.error(err);
                    process.exit(1);
                });
        });
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
    // by id for comments?
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
        db.Users
            .findAll({where: {id: req.params.id}})
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