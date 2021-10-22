const express = require('express')
const request = require('request')
const path = require('path')
const app = express()
const myjoke = require('./joke')

const url = 'https://api.chucknorris.io/jokes/random'
const public = path.join(__dirname + '/public')
app.use(express.static(public))

const port = process.env.PORT || '3000'

app.get('/joke', (req, res) => {
    myjoke(url, (error, response) => {

        if (error) {
            return console.log('This is a joke error')
        }


        console.log(response)
        res.send({
            joke: response
        })
    })
})

app.listen(port, () => {
    console.log('The server is connected to port 3000')
})