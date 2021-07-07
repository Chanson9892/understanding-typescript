// const person: {
//     name: string, // explicitly tell the types
//     age: number
// } = { // TS specialized object type where we provide some info about structure of object, doesn't create new JS object
var person = {
    name: "Chandler",
    age: 23,
    hobbies: ['sports', 'video games']
};
var favoriteActivities; // lets them know its an array of strings
favoriteActivities = ['sports'];
// let favoriteActivities: any[] // create an array with strings and numbers and whatever else
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
