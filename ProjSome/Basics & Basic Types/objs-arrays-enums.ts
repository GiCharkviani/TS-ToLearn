// const person = {
//     name: 'Maxi',
//     age: 30,
//     hobbies: ['Sports', 'Cooking']
// }

// const person: object = {
//     name: 'Maxi',
//     age: 30,
//     hobbies: ['Sports', 'Cooking']
// }

// const person: {} = {
//     name: 'Maxi',
//     age: 30,
//     hobbies: ['Sports', 'Cooking']
// }

const person: {
  name: string;
  age: number; // ასევე შეგვიძლია უბრალოდ რიცხვი დავწეროთ და მის მეტს არ მიიღებს, მაგ - 30
  hobbies: string[];
} = {
  name: "Maxi",
  age: 30,
  hobbies: ["Sports", "Cooking"],
};

console.log(person);

// Tuples = ტიპი => ფიქსირებული მასივისთვის მაგალითად => (string | number)[] = [1, 'gio]
// .push() დაშვებულია ტიუპელებში

const personTuple: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; // Tuples
} = {
  name: "Maxi",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: [1, "gio"],
};

// Enum = ტიპი => enum {NEW, OLD} 

enum Role {
   ADMIN,
   READ_ONLY,
   AUTHOR,
}; // ისინი ავტომატურად დაინომრებიან 0++, თუმცა ხელით მანიპულირებაც შეიძლება

const personEnum = {
    name: "Maxi",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN,
};

// თუ any ტიპს ვიყენებთ, ტაიპსკრიპტის კომპაილერი ვერ მონახავს ტაიპ კონფლიქტებს
let gio:any = 45;



