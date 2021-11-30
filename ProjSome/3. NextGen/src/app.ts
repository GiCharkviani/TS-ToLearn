// Code goes here!
// const userName = "Max";
// userName = 5;
// let age = 30;
// age = 15;


// function add(a:number, b:number) {
//     var result;
//     result = a+b;
//     return result;
// }


// default params
const add = (a: number, b?:number, c:number = 5) => a+b!+c;

const printOutput: (a:number | string) => void = output => output

const button = document.querySelector('button')
button!.addEventListener('click', event => console.log(event))


//spread operator
const hobbies = ['Sports', 'Cooking']
const activeHobbies = ['Hiking']

activeHobbies.push(...hobbies)
hobbies.push('gogo')

const person = {
    name: 'Gio',
    age: 30
}

const copiedPerson = {
    profession: 'Doctor of Computer',
    person: {...person}
}

// rest parameters
const addSmth = (...numbers: number[]):number => {
    return  numbers.reduce((a,b) => a+b)
}

const addedNumbers = addSmth(5,10,2,3.7)
console.log(addedNumbers)

// object destructuring
//array
const newHobbies = ['Sports', 'Cooking', 'Pooping', 'Hating being here', 'and etc.']
const [hobby1, hobby2, ...remainingHobbies] = newHobbies
console.log(hobby1, hobby2, remainingHobbies)

//obj
const newPerson = {
    firstName: 'Gio',
    age: 30,
    wish: 'Get me out of here',
    dream: 'flying...'
}
const { firstName: userName, dream, wish } = newPerson

console.log(userName, dream, wish)