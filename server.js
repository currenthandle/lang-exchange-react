const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
//const socketIo = require('socket.io')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackConfig = require('./webpack.config.js')

const app = express()
const server = http.createServer(app)
//const io = socketIo(server)

app.use(express.static(__dirname + '/public'))
app.use(webpackDevMiddleware(webpack(webpackConfig)))
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/user', (req, res) => {
    console.log('in user route')
    res.end('resp')
    /*
    res.send({
        name: 'steve', 
        lang: 'english'
    })
    */
})

/*
io.on('connection', socket => {
    socket.on('message', body => {
        socket.broadcast.emit('message', {
            body,
            from: socket.id.slice(8)
        })
    })
})
*/

server.listen(3000) 
