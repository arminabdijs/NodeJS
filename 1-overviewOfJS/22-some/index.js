let products = [
    {id: 1, title: "Laptop", price: 90_000_000},
    {id: 2, title: "Phone", price: 22_000_000},
    {id: 3, title: "Mouse", price: 15_000},
    {id: 4, title: "Keyboard", price: 10_000},
    {id: 5, title: "Monitor", price: 120_000},
];

let isPhoneProducts = products.some((product) => {
    console.log(product)
    return product.title === "Phone" && product.price === 120_000
})

console.log(isPhoneProducts)

