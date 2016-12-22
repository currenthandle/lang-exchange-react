import React from 'react'

class SignIn extends React.Component {
    render() {
        return (
            <div>
                <form>
                    <input id='username' type='text' />
                    <input id='password' type='password' />
                </form>
            </div>
        )
    }
}

export default SignIn

