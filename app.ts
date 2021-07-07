// const person: {
//     name: string, // explicitly tell the types
//     age: number
//     hobbies: string[]
//     role: [number, string]
// } = { // TS specialized object type where we provide some info about structure of object, doesn't create new JS object

const person = { // Infers type is better
    name: "Chandler",
    age: 23,
    hobbies: ['sports', 'video games'],
    role: [2, 'author'] // tuple example, for this example, identifiers are number or string

}


let favoriteActivities: string[] // lets them know its an array of strings
favoriteActivities = ['sports']

// let favoriteActivities: any[] // create an array with strings and numbers and whatever else

console.log(person.name)

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase()) // typescript inference knows the array is only strings so we can do .toUpperCase
    // console.log(hobby.map()) !!!! error map is for arrays but not type string
}