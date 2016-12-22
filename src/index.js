import React from 'react'
import ReactDOM from 'react-dom'
//import io from 'socket.io-client'

class App extends React.Component {
    constructor (props) {
        super(props)
        this.state = { data: null }
    }
    
    render() {
        return (
            <div>
                <h1>Lang Exchange</h1>
                <p onClick= {this.handleClick}>Isnt it great!</p>
                <form onSubmit={this.handleSubmit}>
                    <input className='name' />
                    <input className='lang'/>
                    <button>Submit</button>
                </form>
                {this.state.data}
            </div>
        )
    }
    handleSubmit = e => {
        console.log('in submit handler')
        e.preventDefault()
        const nameEle = e.target.querySelector('.name')
        const langEle = e.target.querySelector('.lang')
        const name = nameEle.value
        const lang = langEle.value
        nameEle.value = langEle.value = ''
        let payload = {
            name,
            lang
        }
        const xhr = new XMLHttpRequest()
        xhr.open('post', '/user', true)
        xhr.setRequestHeader('Content-Type', 'application/json')
        xhr.send(JSON.stringify(payload))
    }
    handleClick = e => {
        console.log('in click handler')
        const xhr = new XMLHttpRequest()
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4  && xhr.status === 200 ) {
                this.state.data = xhr.responseText
                this.setState({ data: xhr.responseText })
            }
        }
        xhr.open('get', '/user', true)
        xhr.send()
    }
}


ReactDOM.render(<App/>, document.getElementById('root'))
