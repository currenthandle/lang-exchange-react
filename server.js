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

app.route('/user')
    .get((req, res) => {
        db.users.find({}, (err, users) => {
            if (err) throw err
            res.send(users)
        })
    })
    .post((req, res) => {
        db.users.insert(req.body, (err) => {
            if(err) console.error('error',err)
        })
    })

app.route('user/:username')
    .get((req, res) => {
        console.log(req.params.username)
        db.findOne({ 
            username: req.params.username 
        }, (err, user) => {
            if (err) throw err
            else if(!user) res.send(true)
            else res.send(false)
        })
    })

server.listen(3000) 
