interface Named {
    readonly name?:string
}

interface Greetable extends Named {
  greet?(phase: string): void;
  outputName?: string;
}

// type:
type AddFn = (a: number, b: number) => number;
let add: AddFn;
add = (n1: number, n2: number):number => n1+n2;
// interface:
interface AddFn1 {
    (a: number, b:number):number;
}
let add1:AddFn1;
add1 = (n1: number, n2:number):number => n1 + n2


class Person implements Greetable {
  name?: string;
  age = 30;
  constructor(n?: string) {
    this.name = n;
  }
  greet(phase: string) {
    console.log(phase);
  }
}

const user1: Greetable = new Person('Giorgi')

user1.greet!('Hello')

