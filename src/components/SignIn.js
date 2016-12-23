import React from 'react'

class SignIn extends React.Component {
    render() {
        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor='username'>Username:</label>
                    <input id='username' type='text' />
                    <br/>
                    <label htmlFor='password'>Password:</label>
                    <input id='password' type='password' />
                    <br/>
                    <button>Sign In</button>
                </form>
            </div>
        )
    }
    handleSubmit = e => {
        e.preventDefault()

        fetch('/login', {
            method: 'post',
            headers: new Headers({ 
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify()
        })
    }

}

export default SignIn

