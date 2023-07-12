const mongoose = require('mongoose')

mongoose
    .connect(process.env.MONGODB_URL, { dbname: process.env.DB_NAME })
    .then(() => {
        console.log('mongodb connected...')
    })
    .catch((err) => console.log(err.message))

mongoose.connection.on('connected', () => {
    console.log('mongoose connected successfully..')
})

mongoose.connection.on('error', (err) => {
    console.log(`Mongoose connection error ${err.message}..`)
})

mongoose.connection.on('disconnected', () => {
    console.log("Mongoose disconnected..")
})

process.on('SIGINT', async () => {
    await mongoose.connection.close()
    process.exit(0)
  })