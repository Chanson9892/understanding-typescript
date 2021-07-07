type Combinable = number | string
type Conversion = 'as-number' | 'as-text'

function combine(input1: Combinable, input2: Combinable, resultConversion: Conversion) { 

    let result;

    // runtime type check might be necessary for union types
    // if (typeof(input1) === 'number' && typeof(input2) === 'number') { // work with nums
    //     result = input1 + input2
    // } else {
    //     result = input1.toString() + input2.toString() // work with str
    // }

    // if (resultConversion === 'as-number') { // literal types
    //     return +result // converts it to number or use parseFloat(result)
    // } else {
    //     return result.toString()
    // }

    // converting the strings to numbers before adding the values if the resultConversion is number
    if (typeof(input1) === 'number' && typeof(input2) === 'number' || resultConversion === 'as-number') { // work with nums
        result = +input1 + +input2 // each input converted to number
    } else {
        result = input1.toString() + input2.toString() // work with str
    }
    return result
    
}

const combinedAges = combine(20, 23, 'as-number')
console.log(combinedAges)

const combinedStringAges = combine('20', '23', 'as-number')
console.log(combinedStringAges)

const combinedNames = combine("Ben", "Jammin", 'as-text')
console.log(combinedNames)