// const person: {
//     name: string, // explicitly tell the types
//     age: number
//     hobbies: string[]
//     role: [number, string]
// } = { // TS specialized object type where we provide some info about structure of object, doesn't create new JS object
// const person = { // Infers type is better
//     name: "Chandler",
//     age: 23,
//     hobbies: ['sports', 'video games'],
//     role: [2, 'author'] // tuple example, for this example, identifiers are number or string
// }
// let favoriteActivities: string[] // lets them know its an array of strings
// favoriteActivities = ['sports']
// // let favoriteActivities: any[] // create an array with strings and numbers and whatever else
// console.log(person.name)
// for (const hobby of person.hobbies) {
//     console.log(hobby.toUpperCase()) // typescript inference knows the array is only strings so we can do .toUpperCase
//     // console.log(hobby.map()) !!!! error map is for arrays but not type string
// }
////////////////////////////////////////////////////////////////////////////////////////// enum
// const ADMIN = 0
// const READ_ONLY = 1
// const AUTHOR = 2
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {})); // assigns labels to numbers
var person = {
    name: "Chandler",
    age: 23,
    hobbies: ['sports', 'video games'],
    role: Role.ADMIN // enum
};
if (person.role === Role.ADMIN) {
    console.log('is admin');
}
