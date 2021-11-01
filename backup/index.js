const connectToMongo = require('./dbconnect')
const express = require('express')
var cors = require('cors')

connectToMongo();
const app = express()
const port = 8000

app.use(cors())
app.use(express.json())

// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/ciyRecipe', require('./routes/ciyRecipe'))

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})