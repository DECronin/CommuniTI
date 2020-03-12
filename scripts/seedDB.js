const db = require("../models");

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
    { title: "Gaming" },
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

// create seeds for adminResources

db.sequelize.sync().then(async () => {
    db.Topics.bulkCreate(seedTopics).then(data => {
        console.log(data.result + "TOPICS records inserted!\n");
    })
        .catch(err => {
            console.error(err);
            process.exit(1);
        });

        db.Users.create({
            username: 'Administration',
            password: 'Enljjbv-egSW60hXgN2UUeLk-Cu.uSicLtuzg'
        }, { individualHooks: true }).then(data => {
            console.log(data.result + "ADMIN records inserted!\n");
        })
            .catch(err => {
                console.error(err);
                process.exit(1);
            });
}).catch(err => console.log(err))