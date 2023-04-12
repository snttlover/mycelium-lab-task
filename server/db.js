const mongoose = require('mongoose')

mongoose.connection
  .on('connected', () => {
    console.log(`Mongoose: Database connection open`)
  })
  .on('error', err => {
    console.log(`Mongoose: Database connection error: ${err}`)
  })
  .on('disconnected', () => {
    console.log('Mongoose: Database disconnected')
  })

mongoose.connect(process.env.DB_URI)

module.exports = mongoose
