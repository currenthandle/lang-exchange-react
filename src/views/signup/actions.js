export function setSignupFlash(flashText) {
    return {
        type: 'SET_SIGNUP_FLASH',
        payload: flashText 
    }
}

export function signUpUser(userInfo) {
    return {
        type: 'SIGNUP_USER',
        payload: userInfo
    }
}
