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

// db.Comments.belongsTo(db.Threads, {foreignKey: "thread_id"});
// db.Threads.hasMany(db.Comments);
// db.Comments.hasOne(db.Threads, {foreignKey: "thread_id"});
// db.Topics.belongsToMany( db.Threads, {foreignKey: "topic_id"});
// db.Threads.hasMany(db.Topics);
// db.Threads.belongsToMany(db.Topics, {foreignKey: "thread_id"});
// db.Topics.hasMany(db.Threads);
// db.Users.belongsToMany(db.Comments, {foreignKey: "user_ids"});
// db.Commments.hasOne(db.User, {foreignKey: "user_id"});
// db.Resources.belongsToMany(db.Comments);
// db.Users.hasMany(db.Session);
// db.Session.hasOne(db.Users, {foreignKey: "user_id"});

module.exports = db;
