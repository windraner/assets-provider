const express = require('express')
const path = require('path')
const cors = require('cors')

const { notFound, developmentErrors } = require('./helpers/errorHandlers')

const app = express()

app.use(cors())

app.use(express.static(path.join(__dirname, 'assets')))

app.use(notFound)

app.use(developmentErrors)

const server = app.listen(process.env.PORT || 8080, () => {
  console.log(`Express running → PORT ${server.address().port}`)
})
