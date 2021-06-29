function add(n1: number, n2: number, showResult: boolean, phrase: string) { // added type assignment, both parameters should be number. other types not allowed
    console.log(typeof(n1)) // typeof lets you know the type of variable

    // if (typeof(n1) !== 'number' || typeof(n2) !== 'number') { // non typescript way to not run it if they are not numbers
    //     throw new Error ("incorrect input")
    // }

    const result = n1+n2 // will keep result as a number

    if (showResult){
        console.log(phrase + result)
    } else {
        return result
    }
    
}

const number1 = 5
const number2 = 2.8
const printResult = true
const resultPhrase = "result is: "

add(number1, number2, printResult, resultPhrase)

// const result = add(number1, number2, printResult)

// console.log(result)