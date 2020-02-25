const db = require("../models");
// console.log(db);

const commentSeeds = [{
    title: "test 1",
    summary: "Passport is authentication middleware for Node.js. Extremely flexible and modular, Passport can be unobtrusively dropped in to any Express-based web application. A comprehensive set of strategies support authentication using a username and password, Facebook, Twitter, and more.",
    stance: "1",
    created_at: new Date(),
    updated_at: new Date()
},{
    title: "test 2",
    summary: "In modern web applications, authentication can take a variety of forms. Traditionally, users log in by providing a username and password.",
    stance: "1",
    created_at: new Date(),
    updated_at: new Date()
},{
    title: "test 3",
    summary: "With the rise of social networking, single sign-on using an OAuth provider such as Facebook or Twitter has become a popular authentication method. Services that expose an API often require token-based credentials to protect access.",
    stance: "5",
    created_at: new Date(),
    updated_at: new Date()
},{
    title: "test 4",
    summary: "Despite the complexities involved in authentication, code does not have to be complicated.",
    stance: "4",
    created_at: new Date(),
    updated_at: new Date()
}];

const threadSeeds = [{
    title: "THREAD 1",
    summary: "Passport is authentication middleware for Node.js. Extremely flexible and modular, Passport can be unobtrusively dropped in to any Express-based web application. A comprehensive set of strategies support authentication using a username and password, Facebook, Twitter, and more.",
    stance: "1",
    created_at: new Date(),
    updated_at: new Date()
},{
    title: "THREAD 2",
    summary: "In modern web applications, authentication can take a variety of forms. Traditionally, users log in by providing a username and password.",
    stance: "1",
    created_at: new Date(),
    updated_at: new Date()
},{
    title: "THREAD 3",
    summary: "With the rise of social networking, single sign-on using an OAuth provider such as Facebook or Twitter has become a popular authentication method. Services that expose an API often require token-based credentials to protect access.",
    stance: "5",
    created_at: new Date(),
    updated_at: new Date()
},{
    title: "THREAD 4",
    summary: "Despite the complexities involved in authentication, code does not have to be complicated.",
    stance: "4",
    created_at: new Date(),
    updated_at: new Date()
}]

db.sequelize.sync().then(() => {

db.Comments.bulkCreate(commentSeeds).then(data => {
    console.log(data.result + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
db.Threads.bulkCreate(threadSeeds).then(data => {
    console.log(data.result + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

}).catch(err => console.log(err))