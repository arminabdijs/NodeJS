let products = [
    {id: 1, title: 'Laptop', price: 90000000},
    {id: 2, title: 'Phone', price: 22000000},
    {id: 3, title: 'Mouse', price: 15000},
    {id: 4, title: 'Keyboard', price: 10000},
    {id: 5, title: 'Monitor', price: 120000},

]

let mainProduct = products.every((product) => {
    return product.price > 0
})

console.log(mainProduct)