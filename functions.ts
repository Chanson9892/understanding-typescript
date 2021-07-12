function add(n1: number, n2: number): number { // functions have return types. can set it or infer it
    return n1 + n2
}

function printResult(num: number){ // the return type is void because we are not returning anything
    console.log("Result: " + num)
}

printResult(add(5, 12))

// we can store a function in a variable. the paranthesis are arguments the right is return
let combineValues: (a: number, b:number) => number; 
combineValues = add;
console.log(combineValues(8,8))

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) { // have void so it doesn't really care about the return type.
    const result = n1 + n2
    cb(result)
}

addAndHandle(10, 20, (result) => { //result will be a number due to the call back looking for a number
    console.log(result)
})