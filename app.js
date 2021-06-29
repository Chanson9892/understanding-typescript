function add(n1, n2, showResult, phrase) {
    console.log(typeof (n1)); // typeof lets you know the type of variable
    // if (typeof(n1) !== 'number' || typeof(n2) !== 'number') { // non typescript way to not run it if they are not numbers
    //     throw new Error ("incorrect input")
    // }
    var result = n1 + n2; // will keep result as a number
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
var number1 = 5;
var number2 = 2.8;
var printResult = true;
var resultPhrase = "result is: ";
add(number1, number2, printResult, resultPhrase);
// const result = add(number1, number2, printResult)
// console.log(result)
