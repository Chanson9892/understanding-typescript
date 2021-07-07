function combine(input1, input2) {
    var result;
    if (typeof (input1) === 'number' && typeof (input2) === 'number') { // work with nums
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString(); // work with str
    }
    return result;
}
var combinedAges = combine(20, 23);
console.log(combinedAges);
var combinedNames = combine("Ben", "Jammin");
console.log(combinedNames);
