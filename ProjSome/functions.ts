function add(n1: number, n2:number):number {
    return n1 + n2
}

function printResult(num: number):void {
    console.log('Result: ' + num);
}

function printResult1(num: number):undefined {
    console.log('Result: ' + num);
    return;
}

printResult(add(5,12))

let letsomeValue: undefined;

// let combineValues: Function;
let combineValues: (a: number, b:number) => number;

combineValues = add;
// combineValues = 5;
console.log(combineValues(8,8))

function addAndHandle(n1:number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result)
}

addAndHandle(10, 20, val => {
    console.log(val)
})
