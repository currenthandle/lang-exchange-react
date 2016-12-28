import { combineReducers } from 'redux'

import signup from './signupReducer'

// not doing anything right now
export default combineReducers({
    signup
})






/*
import { SignUpFlash } from './actions'

const initalState = {
    signUpFlash = ''
}

function langExchangeApp(state = initalState, action) {
    switch (action.type) {
        case SET_SIGNUP_FLASH:
            return Object.assign ({}, state, {
                signUpFlash = action.text
                //signUpFlash = action.signUpFlash
            })
        default: 
            return state
    }
}
*/
