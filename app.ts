// const person: {
//     name: string, // explicitly tell the types
//     age: number
// } = { // TS specialized object type where we provide some info about structure of object, doesn't create new JS object

const person = { // Infers type is better
    name: "Chandler",
    age: 23,

}

console.log(person)