let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let sum = 0

for (const number in numbers) {
    sum += numbers[number]
    console.log(number, ":", numbers[number])
}

console.log("sum : " + sum)

let object = {
    name: "Array",
    age: 12
}

for (const Key in object) {
    console.log(Key,object[Key])
}