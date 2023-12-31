require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.use(
    express.urlencoded({
        extended: true,
    }),
)
app.use(express.json())

const personRoutes = require('./Routes/personRoutes')

app.use('/person', personRoutes)

app.get('/', (req, res) => {
    
    res.json({ message: 'OI EXPRESS!' })
})

const DB_USER = process.env.DB_USER
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD)

mongoose 
.connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster1.puqn3zq.mongodb.net/?retryWrites=true&w=majority`
    )
    .then(() => {
        console.log('Conectamos ao MongoDB!')
        app.listen(3000)

    })
    .catch((err) => console.log(err)) 