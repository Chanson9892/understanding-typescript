let userInput: unknown // we don't know what it will be yet.
let userName: string

userInput = 5
userInput = 'Max'

if(typeof userInput === 'string'){
    userName = userInput
}

function generateError(message: string, code: number){ // returns nothing. never does not return a return value.
    throw {message: message, errorCode: code}
}

generateError('error occurred', 500)