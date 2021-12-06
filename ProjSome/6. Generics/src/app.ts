// Generic type = რა ტიპის ინფორმაცია შევა კონკრეტულ ტიპში, ტიპი რომელიც დაკავშრებულია სხვა ტიპთან. ტაიპსკრიპტში ჩაშენებული ტიპია: Array<string>

// const names: Array<string> = ['Max', 'Manuel']

// const promise: Promise<string> = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('This is done!')
//     }, 2000)
// })

// promise.then(data => {
//     data.split(' ')
// })


// ჯენერიკ ტიპის შექმნა ჩვენითაც შეგვიძლია. ამისთვის მაგალითად ფუნქციას სახელის მერე ჩავუსვამთ სტანდარტულ ტიპს - <T>, შემდეგ კი T-ს გამოვიყენებთ ყველგან, სადაც გვსურს იგივე ტიპი გავრცელდეს. ასევე შეგვიძლია რამდენიმე ტიპი ჰქონდეს, მაგალითად - <T, U>.
// ჩვენს მიერ ჩაწოდებული ცვლადი ტიპი დამოკიდებული იქნება იმ დეითაზე, რომელიც შევა და შესაბამისად, მის ტიპად იქცევა ის ცვლადი, რომელიც ამ დეითას ინახავს.


function merge<T, U>(objA: T, objB: U) {
    return Object.assign(objA, objB)
}

const mergedObj = merge({name: 'Gio'}, {age: 15})
console.log(mergedObj.age)

// type constraints - ისინი კონკრეტულ ჯენერიკ ტიპს განუსაზღვრავენ, რომ იგი შეიძლება იყოს ნებისმიერი ტიპის, მაგალითად - ობიექტი. ამისთვის იყენებს extends ქივორდს:
function gaga<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB)
}


function countAndDescribe<T extends Array<string> | string>(element: T): [T, string] {
    let descriptionText = 'Got no value.'
    if(element.length === 1) {
        descriptionText = 'Got 1 element.'
    } else if(element.length > 1 ) {
        descriptionText = 'Got ' + element.length + ' elements.'
    }
    return [element, descriptionText]
}

console.log(countAndDescribe(['hi', 'gaga']))

// keyof constraint - იგი მიუთითებს იმაზე, რომ კონკრეტული ტიპი მეორე ტიპის (ობიექტის), ქის წარმოადგენს:
function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return 'Value: ' + obj[key]
}

console.log(extractAndConvert({name: 'gio'}, 'name'))

// generic classes - შემდეგნაირად მუშაობენ:

class DataStorage<T extends string | number | boolean> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item)
    }

    removeItem(item: T):any {
        if(this.data.indexOf(item) === -1) {
            return -1
        }
        this.data.splice(this.data.indexOf(item), 1)
    }

    getItems() {
        return [...this.data]
    }
}

const textStorage = new DataStorage<string>()
textStorage.addItem('da')

const numberStorage = new DataStorage<number | string>()



// Generic Utility Types - Partial - იგი ოფშენალად აქცევს ყველა ჩვენს ჰარდკოდედ ტიპებს
interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;

}

function createCourseGoal(title: string, description: string, date: Date): CourseGoal {
    let courseGoal: Partial<CourseGoal>  = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date
    return courseGoal as CourseGoal
}

// Readonly - იგი ჩაკეტავს ობიექტს
const names: Readonly<string[]> = ['Max', 'Anna']
// names.push('Menu')

//