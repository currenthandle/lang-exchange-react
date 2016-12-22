import React from 'react'
import ReactDOM from 'react-dom'
//import io from 'socket.io-client'

class App extends React.Component {

    render() {
        return (
            <div>
                <h1>Lang Exchange</h1>
                <p onClick= {this.handleClick}>Isnt it great!</p>
            </div>
        )
    }
    handleClick = (e) => {
        console.log('in click handler')
        const xhr = new XMLHttpRequest()
        xhr.onreadystatechange = () => {
            if (this.readyState === 4  && this.status === 200 ) {
                console.log(this.responseText)
            }
        }
        xhr.open('get', '/user', true)
        xhr.send()
    }
}


ReactDOM.render(<App/>, document.getElementById('root'))
