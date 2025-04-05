const user = {
    id: 1,
    name: 'John Doe',
    age: 25,
    address: {
        country: 'United States',
        city: 'New York',
        street: '123 Main St',
        zipCode: '10001'

    }
}

console.log(user)

// Convert object to JSON string
const userJson = JSON.stringify(user)
console.log(userJson)


// Convert JSON string to object
const userObj = JSON.parse(userJson)
console.log(userObj)

