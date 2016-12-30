import { combineReducers } from 'redux'

import signup from './signupReducer'
import user from './user'

// not doing anything right now
export default combineReducers({
    signup,
    user
})


