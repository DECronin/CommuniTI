require('dotenv').config()
const app = require('./app')
const db = require('./models')
const PORT = process.env.PORT || 3001

db.sequelize
  .sync({ force: false })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`API Server now listening on PORT ${PORT}!`)
    })
  })
  .catch(err => console.log(err))