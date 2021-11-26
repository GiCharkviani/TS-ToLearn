let userInput:unknown;

let userName: string;

userInput = 5;
userInput = 'Gio';

if(typeof userInput === 'string') {
    userName = userInput
}

// never

function generateError(message: string, code:number): never {
    throw {
        message: message, errorCode: code
    }
}

const result = generateError('An error occured', 500);

console.log(result)

