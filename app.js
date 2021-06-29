function add(n1, n2) {
    console.log(typeof (n1)); // typeof lets you know the type of variable
    if (typeof (n1) !== 'number' || typeof (n2) !== 'number') { // non typescript way to not run it if they are not numbers
        throw new Error("incorrect input");
    }
    return n1 + n2;
}
var number1 = '5';
var number2 = 2.8;
var result = add(number1, number2);
console.log(result);
