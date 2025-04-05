let db = [
    {
        id: "9ed36953-eb2c-4e3c-8549-f927b53c67b3",
        name: "John Doe",
        username: "John_Doe",
        password: "12345678",
        email: "john121@gmail.com",
        address: "123 Main St",
        phone: "989185467382",
        crime: 900000,
        role: "USER"
    },
]

const newUser = {
    id: crypto.randomUUID(),
    name: "Alice",
    username: "Alice_Smith",
    password: "password123",
    email: "alice123@gmail.com",
    address: "456 Elm St",
    phone: "987654321098",
    crime: 100000,
    role: "ADMIN"
}

db.push(newUser)

console.log(db)