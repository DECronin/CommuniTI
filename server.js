const express = require("express");
const routes = require("./routes");
// const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

// const url = "./client/public/index.html"; // || "./client/build/index.html" 

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use("/", routes);
// app.use(app.router);
// routes.initialize(app);
// Send every request to the React app
// Define any API routes before this runs
// app.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, url));
// });


app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});