import React from 'react'
import ReactDOM from 'react-dom'
import io from 'socket.io-client'
console.log('io', io)

class App extends React.Component {
    constructor (props) {
        super(props)
        this.state = { messages: [] }
        console.log('constructor: this.state', this.state)
    }
    componentDidMount() {
        console.log('component did mount')
        this.socket = io('/')
        console.log('this.socket', this.socket)
        this.socket.on('message', message => {
            console.log('on message', message)
            console.log('componentDidMount: this.state', this.state)
            this.setState({ messages: [message, ...this.state.messages] })
        })
    }
    handleSubmit = event => {
        const body = event.target.value
        if(event.keyCode === 13 && body){
            const message = {
                body,
                from: 'Me'
            }
            this.setState({ messages: [message, ...this.state.messages] })
            this.socket.emit('message', body)
            event.target.value = ''
        }
    }

    render() {
        const messages = this.state.messages.map((message, index) => {
            return <li key={index}><b>{message.from}:</b>{message.body}</li>
        })
        return (
            <div>
                <h1>Hello World</h1>
                <input type='text' placeholder='Enter a message...' onKeyUp={this.handleSubmit} />
                {messages}
            </div>
        )
    }
}


ReactDOM.render(<App/>, document.getElementById('root'))
