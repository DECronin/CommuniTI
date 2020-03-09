const db = require("../models");

const commentSeeds = [{
    title: "test 1",
    summary: "Passport is authentication middleware for Node.js. Extremely flexible and modular, Passport can be unobtrusively dropped in to any Express-based web application. A comprehensive set of strategies support authentication using a username and password, Facebook, Twitter, and more.",
    stance: "1",
    thread_id: '25',
    user_id: '1'
}, {
    title: "test 2",
    summary: "In modern web applications, authentication can take a variety of forms. Traditionally, users log in by providing a username and password.",
    stance: "1",
    thread_id: '25',
    user_id: '1'
}, {
    title: "test 3",
    summary: "With the rise of social networking, single sign-on using an OAuth provider such as Facebook or Twitter has become a popular authentication method. Services that expose an API often require token-based credentials to protect access.",
    stance: "5",
    thread_id: '25',
    user_id: '1'
}, {
    title: "test 4",
    summary: "Despite the complexities involved in authentication, code does not have to be complicated.",
    stance: "4",
    thread_id: '25',
    user_id: '1'
}];

const threadSeeds = [{
    title: "THREAD 1",
    summary: "Passport is authentication middleware for Node.js. Extremely flexible and modular, Passport can be unobtrusively dropped in to any Express-based web application. A comprehensive set of strategies support authentication using a username and password, Facebook, Twitter, and more.",
    stance: "1"
}, {
    title: "THREAD 2",
    summary: "In modern web applications, authentication can take a variety of forms. Traditionally, users log in by providing a username and password.",
    stance: "1"
}, {
    title: "THREAD 3",
    summary: "With the rise of social networking, single sign-on using an OAuth provider such as Facebook or Twitter has become a popular authentication method. Services that expose an API often require token-based credentials to protect access.",
    stance: "5"
}, {
    title: "THREAD 4",
    summary: "Despite the complexities involved in authentication, code does not have to be complicated.",
    stance: "4"
}]

const seedTopics = [
    { title: "Art" },
    { title: "Corruption" },
    { title: "Weather" },
    { title: "Food" },
    { title: "Space" },
    { title: "Shopping" },
    { title: "Finance" },
    { title: "Career" },
    { title: "Events" },
    { title: "Geology" },
    { title: "Gamming" },
    { title: "Restaurants" },
    { title: "Family" },
    { title: "Travel" },
    { title: "Religion" },
    { title: "Miscellaneous" },
    { title: "Culture" },
    { title: "Automotive" },
    { title: "Business: Euntreprenural" },
    { title: "Business: Corporate" },
    { title: "Industry Labor" },
    { title: "Music" },
    { title: "Pop Culture" },
    { title: "Entertainment" },
    { title: "Sports" },
    { title: "Agriculture" },
    { title: "Technology" },
    { title: "Social Media" },
    { title: "Sociology" },
    { title: "Theory" },
    { title: "Psychology" },
    { title: "Education" },
    { title: "History" },
    { title: "Literature: Fiction" },
    { title: "Literature: Nonfiction" },
    { title: "LGBTQ+" },
    { title: "Politics" },
    { title: "Health & Medical" },
    { title: "Medicine" },
    { title: "Fashion" },
    { title: "Stock Market" },
    { title: "Animals" },
    { title: "Health Care" },
    { title: "Case Law" },
    { title: "Constitutional Rights" }
];

const testUsers = [{
    username: 'test1',
    password: 'test1'
}, {
    username: 'test2',
    password: 'test2'
}];

const seedResources = [{
    title: 'resource 1',
    category: 'Other?',
    url: 'https://www.google.com/'
},{
    title: 'resource 2',
    category: 'Other?',
    url: 'https://www.google.com/'
},{
    title: 'resource 3',
    category: 'Other?',
    url: 'https://www.google.com/'
},{
    title: 'resource 4',
    category: 'Other?',
    url: 'https://www.google.com/'
},{
    title: 'resource 5',
    category: 'Other?',
    url: 'https://www.google.com/'
}];

db.sequelize.sync().then(async () => {
    db.Topics.bulkCreate(seedTopics).then(data => {
        console.log(data.result + "TOPICS records inserted!\n");
    })
        .catch(err => {
            console.error(err);
            process.exit(1);
        });
    db.Users.bulkCreate(testUsers, { individualHooks: true }).then(data => {
        console.log(JSON.stringify(testUsers) + " USERS records inserted!\n");
    })
        .catch(err => {
            console.error(err);
            process.exit(1);
        })
    db.Comments.bulkCreate(commentSeeds).then(data => {
        console.log(data.result + " COMMENTS records inserted!\n");
    })
        .catch(err => {
            console.error(err);
            process.exit(1);
        });
    db.Threads.bulkCreate(threadSeeds).then(data => {
        console.log(data.result + " THREADS records inserted!\n");
        let tempThreadTopics = [];
        for(i = 0; i < data.length; i++){
            console.log(`\ndata[< ${i} >]::\n${JSON.stringify(data[i])}`);
            let tempTT = {
                topic_id: Math.ceil(Math.random()*45).toString(),
                thread_id: data[i].id.toString()
            }
            tempThreadTopics.push(tempTT)
        }
        console.log("\nTT::\n" + JSON.stringify(tempThreadTopics))
        db.ThreadTopics.bulkCreate(tempThreadTopics).then(joinData => {
            console.log(joinData.result + " T == T records inserted!\n");
        }).catch(err => {
                console.error(err);
                process.exit(1);
            });
    })
        .catch(err => {
            console.error(err);
            process.exit(1);
        });
    db.Resources.bulkCreate(seedResources).then(data => {
        console.log(data.result + " RESOURCES records inserted!\n");
        let tempCommentResources = [];
        console.log(`====\nresources bulk create:::\n${JSON.stringify(data)}\n---------`)
        for(i = 0; i < data.length; i++){
            console.log(`\ndata[< ${i} >]::\n${JSON.stringify(data[i])}`);
            let tempCR = {
                comment_id: Math.ceil(Math.random()*5).toString(),
                resource_id: data[i].id.toString()
            }
            tempCommentResources.push(tempCR);
        }
        db.CommentResources.bulkCreate(tempCommentResources).then(joinData => {
            console.log(joinData.result + " C == R records inserted!\n");
        })
            .catch(err => {
                console.error(err);
                process.exit(1);
            });
    })
        .catch(err => {
            console.error(err);
            process.exit(1);
        });
}).catch(err => console.log(err))