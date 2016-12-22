const mongojs = require('mongojs')
const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackConfig = require('./webpack.config.js')

const db = mongojs('lang-exchange', ['users'])
const app = express()
const server = http.createServer(app)

app.use(express.static(__dirname + '/public'))
app.use(webpackDevMiddleware(webpack(webpackConfig)))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/user', (req, res) => {
    db.users.find({}, (err, users) => {
        if (err) throw err
        res.send(users)
    })
})
app.post('/user', (req, res) => {
    db.users.insert(req.body, (err) => {
        if(err) console.error('error',err)
    })
})

server.listen(3000) 
