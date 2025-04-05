const sum = (a, b, c) => {
    return a + b + c;
}

console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 12)) //It does not add 12 with other numbers and ignores that number

//----------------------------------------------------------------
const sumParams = (...params) => {
    let sum = 0

    for (const param of params) {
        sum += param
    }

    return sum;
}

console.log(sumParams(1, 2, 3, 10));
//----------------------------------------------------------------
const sumParams1 = (a, b, ...params) => {
    let sum = 0

    for (const param of params) {
        sum += param
    }

    return sum;
}

console.log(sumParams1(1, 2, 3, 10));


