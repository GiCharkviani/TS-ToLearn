// Code goes here!
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

// interface ElevatedEmployee1 extends Employee, Admin {}

const e1: ElevatedEmployee = {
  name: "Gio",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;

function add(a: Combinable, b: Combinable): Combinable {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

// console.log(add(5,'6'))

type UnknownEmployee = Employee | Admin;
function printEmoloyeeInformation(emp: UnknownEmployee) {
  console.log("Name: " + emp.name);
  if ("privileges" in emp) {
    console.log("Privileges: " + emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("Start Date: " + emp.startDate);
  }
}

// printEmoloyeeInformation(e1)

class Car {
  drive() {
    console.log("Driving...");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck...");
  }

  loadCargo(amount: number) {
    console.log("Loading cargo ..." + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();

  // if('loadCargo' in vehicle) {
  //     vehicle.loadCargo(100)
  // }

  if (vehicle instanceof Truck) {
    vehicle.loadCargo(100);
  }
}

// discriminated unions
interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
  }
  console.log("Moving with speed: " + speed);
}

// moveAnimal({type: 'bird', flyingSpeed: 5})

// Type Casting

const userInputElement = <HTMLInputElement>(
  document.getElementById("user-input")
);

userInputElement.value = "Hi there! <>";

const userInputElement1 = document.getElementById(
  "used-input"
) as HTMLInputElement;
userInputElement1.value = "Hi here! as";

const userInputElementa = <HTMLInputElement>(
  document.getElementById("user-input")
);
if (userInputElementa) {
  (userInputElementa as HTMLInputElement).value = "How are you?";
}

// Index types
interface ErrorContainer {
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: "Not a valid email",
  username: "Must start with a capital character!",
};

// Function overloads

function daamate(n: number): number; // ოფშენალად აქცია მეორე პარამეტრი
function daamate(a: number, b?: number): number;
function daamate(a: string, b?: string): string;
function daamate(a: Combinable, b?: Combinable): Combinable {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b!.toString();
  }
  return a + b!;
}

const resultHere = daamate("Max", "Charkvi");
resultHere.split("");

// Optional Chaining
const fetchedUserData = {
  id: "u1",
  name: "Max",
  job: {
    title: "CEO",
    description: "My own company",
  },
};

// JS-ში ასე შევამოწმებდით:
console.log(fetchedUserData.job && fetchedUserData.job.title);

// TS-ში ასე იქნებოდა - Optional Chaining:
console.log(fetchedUserData?.job?.title);

// Nullish Coalescing
const userInput = null;

// JS-ში
const storedData = userInput || "DEFAULT";

// TS-ში
const storedDataTS = userInput ?? "DEFAULT";
