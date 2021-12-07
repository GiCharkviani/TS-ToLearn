// დეკორატორი საბოლოო ჯამში ფუნქციაა, რომელიც კლასში შედის განსაკუთრებული გზით. ანუ კლასის ზევით იწერება დეკორატორი, რომელის ზევითაც დგას ფუნქცია და ამ ფუნქციის სახელს იზიარებს დეკორატორი. ეს ფუნქცია მიიღებს არგუმენტს, რომელიც Function ტიპის არის და ეს არგუმენტი შეინახავს მასში ამ კლასს:

// function Logger(constructor: Function) {
//     console.log('Logging...')
//     console.log(constructor)
// }

// @Logger
// class Person {
//     name = 'Max';

//     constructor() {
//         console.log('Creating person object...')
//     }
// }

// const pers = new Person()

// console.log(pers)

// დეკორატორი დეკლარირების მეორე გზაა, როცა დეკორატორს, როგორც ფუნქციას, ისე ვიძახებთ
// function Logger(logString: string) {
//   return function(constructor: Function) {
//     console.log(logString);
//     console.log(constructor);
//   };
// }

// @Logger('LOGGING - PERSON')
// class Person {
//   name = "Max";

//   constructor() {
//     console.log("Creating person object...");
//   }
// }

// const pers = new Person();

// უფრო გამოყენებადი დეკორატორები შემდეგნაირად იგება: მას ეწოდება ე.წ. 'Meta Programming' - რომელიც გარკვეულ თემფლეითს არენდერებს მხოლოდ დეკორატორის მიბმით კლასზე. angular მუშაობის პრინციპის მსგავსად:
// function WithTemplate(template: string, hookId: string) {
//     return function(constructor: any) {
//         const hookEl = document.getElementById(hookId);
//         const p = new constructor()
//         if(hookEl) {
//             hookEl.innerHTML = template
//             hookEl.querySelector('h1')!.textContent = p.name
//         }
//     }
// }

// @WithTemplate('<h1>My Person Object</h1>', 'app')
// class Person {
//   name = "STOP WATCHING!";
//   constructor() {
//     console.log("Creating person object...");
//   }
// }

// _ აღნიშნვა არგუმენტად იგივეა, რაც იცი, რომ მიიღებს არგუმენტს, თუმცა მას შგნით არ გამოიყენებ - function(_: Function){}

// მრავალი დეკორატორის დამატება: ჩვეულებრივ იმუშავებენ, ანუ ორივე ფუნქცია გაეშვება თუმცა თამიმდევრობას რაც შეეხება, ისინი ეშვებიან ზევიდან ქვევით, ანუ ამ შემთხვევაში ჯერ Logger გაეშვება და მერე WithTemplate, ხოლო ჩაშენებული, ანუ დეკორატორის ფუნქციები პირიქით, ქვევიდან ზევით გაეშვებიან

// function Logger(logString: string) {
//   return function (constructor: Function) {
//     console.log(logString);
//     console.log(constructor);
//   };
// }

// function WithTemplate(template: string, hookId: string) {
//   return function (constructor: any) {
//     const hookEl = document.getElementById(hookId);
//     const p = new constructor();
//     if (hookEl) {
//       hookEl.innerHTML = template;
//       hookEl.querySelector("h1")!.textContent = p.name;
//     }
//   };
// }

// @Logger("LOGGING")
// @WithTemplate("<h1>My Person Object</h1>", "app")
// class Person {
//   name = "Max";
//   constructor() {
//     console.log("Creating person object...");
//   }
// }

// დეკორატორები ასევე შეიძლება მიებან Property-ებს. ამ შემთხვევაში, პირველი არგუმენტი იქნება პროტოტიპი, ანუ ინსტანსი, ხოლო თუ სტატიკური ფროფერთია, იგი დაუმიზნებს თავად კონსტრუქტორს. მეორე არგუმენტი კი თავად ფროფერთის სახელი.
// იგი, და სევე კლასის დეკორატორებიც, გაეშვებიან, როცა JS დაარეგისტრირებს კლასს, ანუ ახალი ინსტანსის შექმნის გარეშეც

// პარამეტრებზე წვდომა

// function Log(target: any, propertyName: string) {
//     console.log('Property decorator!')
//     console.log(target, propertyName)
// }

// function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
//   console.log('Accessor decorator!')
//   console.log(target)
//   console.log(name)
//   console.log(descriptor)
// }

// function Log3(target: any, name: string, descriptor: PropertyDescriptor) {
//   console.log('Method decorator!')
//   console.log(target)
//   console.log(name)
//   console.log(descriptor)
// }

// function Log4(target: any, name: string, position: number) {
//   console.log('Parameter decorator!')
//   console.log(target)
//   console.log(name)
//   console.log(position)
// }

// class Product {
//   @Log
//   title: string;
//   private _price: number;

//   @Log2 // accessor decorator
//   set price(val: number) {
//     if (val > 0) {
//       this._price = val;
//     } else {
//       throw new Error("Invalid price - should be positive!");
//     }
//   }

//   constructor(t: string, p: number) {
//     this.title = t;
//     this._price = p;
//   }

//   @Log3 // method decorator
//   getPriceWithTax(@Log4 tax: number) {
//     return this._price * (1 + tax);
//   }
// }

// დეკორატორები გამოიყენება ძირითადად მეტაპროგრამირებისთვის, ანუ ისინი ახლიდან არ გამოიძახება, როცა მაგალთად კლასის ახალი ინსტანსი იქმნება. ისინი მხოლოდ კლასის ინიციალიზებისას გამოიძახებიან და გეხმარებიან კლასის უფრო მეტად კონფიგურირებისთვის სანამ მისი ინსტანსი შეიქმნება.

// Method decorators - 
// ამ შემთხვევაში ვაბრუნებთ ახალ კლასს, რომელიც დამყარებულია ძველ კლასზე, მის კონსტრუქტორზე ანუ (თუმცა სრულიად ახალი კლასიც შეიძლებოდა შეგვექმნა), მასში გადაგვაქვს ჩვენი რენდერინგის ლოგიკა და ასევე შესაბამისად ვუწერთ კლასებს, რათა სწორად მოხდეს TS-ის მიერ ჩვენი ლოგიკის აღქმა.
// მნიშნველოვანია, რომ ამ ლოგიკით უკვე, იმისათვის რომ თემფლეითი დარენდერდეს, აუცილებელია ახალი ინსტანსის შექმნა კონკრეტული კლასის

// function WithTemplate(template: string, hookId: string) {
//   return function<T extends {new(...args: any[]): {name: string}}>(originalConstructor: T) {
//     return class extends originalConstructor {
//       constructor(..._: any[]) {
//         super();
//         const hookEl = document.getElementById(hookId);
//         if (hookEl) {
//           hookEl.innerHTML = template;
//           hookEl.querySelector("h1")!.textContent = this.name;
//         }
//       }
//     }
//   };
// }

// @WithTemplate("<h1>My Person Object</h1>", "app")
// class Person {
//   name = "STOP WATCHING!";
//   constructor() {
//     console.log("Creating person object...");
//   }
// }

// const element = new Person()


// method configurations - აქ დავაკონფიგურირებთ თავად მეთოდს:
// მეთოდის კონფიგურაციამდე გასათვალისწინებელი ინფორმაცია:
// 1. ყველა დეკორატორი არ არეთურნებს (return). 
// 2. შემდეგი დეკორატორები არეთურნებენ: ექსესორების და მეთოდების.
// 3. ორივე ტიპი JS-შივე ატარებენ ე.წ. PropertyDescrioptor ტიპს, თუმცა მცირე განსხვავებები აქვთ
// 4. PropertyDescrioptor-ი მოიცავს:
// configurable (შეიძლება თუ არა კონფიგურირება), enumerable(ობიექტშ ლუპისას გამოჩნდება თუ არა როგორც ფროფერთ), value (თავად ფუნქცია), writable (ინიციალიზების მერე შესაძლებელი იქნება თუ არა გადააწერო)
// შესაბამისად კონკრეტული დეკორატორების ფუქნციებში შესაძლებელია მეთდის კონფიგურირება:

// function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
//   const originalMethod = descriptor.value;
//   const adjDescriptor: PropertyDescriptor = {
//     configurable: true,
//     enumerable: false,
//     get() {
//       const boundFn = originalMethod.bind(this) // ყოველთვის მიმართავს ობიექტს, რომელიც მას გამოიძახებს
//       return boundFn
//     }
//   }
//   return adjDescriptor
// }

// class Printer {
//   message = 'This works!'

//   @Autobind
//   showMessage() {
//     console.log(this.message)
//   }
// }
// const p = new Printer()

// const button = document.querySelector('button')!;
// // button.addEventListener('click', p.showMessage.bind(p)) // ალტერნატივა
// button.addEventListener('click', p.showMessage)


// Decorators for validation - კონკრეტული მიდგომით შეგვიძლია ვალიდაცია გავწიოთ მანამ, სანამ ახალი ინსტანსი შეიქმნებოდეს:

interface ValidatorConfig {
  [property: string]: {
    [validatableProp:string]: string[] // ['required', 'positive']
  }
}

const registratedValidators: ValidatorConfig = {}


function Required(target: any, propName: string) {
  registratedValidators[target.constructor.name] = {
    ...registratedValidators[target.constructor.name],
    [propName]: [...(registratedValidators[target.constructor.name]?.[propName] ?? []), 'required']
  }
}

function PositiveNumber(target: any, propName: string) {
  registratedValidators[target.constructor.name] = {
    ...registratedValidators[target.constructor.name],
    [propName]: [...(registratedValidators[target.constructor.name]?.[propName] ?? []), 'positive']
  }
}

function validate(obj: any) {
  const objValidatorConfig = registratedValidators[obj.constructor.name];
  if(!objValidatorConfig) {
    return true
  }
  let isValid = true;
  for(const prop in objValidatorConfig) {
    for(const validator of objValidatorConfig[prop]) {
      switch(validator) {
        case 'required':
          isValid = isValid && !!obj[prop];
          break;
        case 'positive':
          isValid = isValid && obj[prop] > 0;
          break;
      }
    }
  }
  return isValid
}

class Course {
  @Required
  title: string;
  @PositiveNumber
  price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}

const courseForm = document.querySelector('form')!

courseForm?.addEventListener('submit', event => {
  event.preventDefault()
  const titleEl = document.getElementById('title') as HTMLInputElement;
  const priceEl = document.getElementById('price') as HTMLInputElement;

  const title = titleEl.value;
  const price = +priceEl.value;
  
  const createdCourse = new Course(title, price);

  if (!validate(createdCourse)) {
      alert('Invalid input, please try again!')
      return;
  }

  console.log(createdCourse)
})