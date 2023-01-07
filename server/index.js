require('dotenv').config();

const { PORT } = require('./src/consts')
const express = require('express')
const cors = require('cors')

const app = express()
const api = require('./src/routes') 

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cors())
app.use('/api/v1/', api)

app.listen(PORT, () => {
    console.info(`moviz server is up and running on ${PORT}`)
})

process.on('uncaughtException', (err) => {
    console.error('uncaughtException', err);
    process.exit(1);
});

process.on('unhandledRejection', (err) => {
    console.error('unhandledRejection', err);
    process.exit(1);
});
