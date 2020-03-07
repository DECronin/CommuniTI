"use strict";
const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
    sequelize = new Sequelize(
        config.database,
        config.username,
        config.password,
        config
    );
}

fs.readdirSync(__dirname)
    .filter(file => {
        return (
            file.indexOf(".") !== 0 &&
            file !== basename &&
            file.slice(-3) === ".js"
        );
    })
    .forEach(file => {
        const model = sequelize["import"](path.join(__dirname, file));
        db[model.name] = model;
    });

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// db associations

// db.Threads.hasMany(db.Commments, {foreignKey: "thread_id"})
// db.Comments.hasOne(db.Threads);

// db.Topics.belongsToMany( db.Threads, {through: db.ThreadTopics});
// db.Threads.belongsToMany(db.Topics, {through: db.ThreadTopics});


// db.Users.hasMany(db.Comments, {foreignKey: "user_id"});
// db.Commments.hasOne(db.User);

// db.Commments.hasMany(db.Resources, {through: db.CommentResources})
// db.Resources.hasMany(db.Comments, {through: db.CommentResources});

// db.Users.hasMany(db.Session);
// db.Session.hasOne(db.Users, {foreignKey: "user_id"});

module.exports = db;
