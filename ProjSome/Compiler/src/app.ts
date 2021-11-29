let userName: string = "giorgi";

const gio = "gg";

class User {
  userName!: string;
  constructor() {}
  setName(name: string) {
    this.userName = name;
  }
}
let newUser = new User();
newUser.setName("gio");

console.log(newUser);

const button = document.querySelector("button")!;

if(button){
  button.addEventListener("click", clickHandler.bind(null, "Your're Welcome!"));
}


const map = new Map()

console.log(map)

function clickHandler(message:string) {
  console.log('Clicked!' + message)
}
