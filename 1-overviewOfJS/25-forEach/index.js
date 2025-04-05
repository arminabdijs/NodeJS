let products = [
    {id: 1, title: 'Laptop', price: 90000000},
    {id: 2, title: 'Phone', price: 22000000},
    {id: 3, title: 'Mouse', price: 15000},
    {id: 4, title: 'Keyboard', price: 10000},
    {id: 5, title: 'Monitor', price: 120000},

]

let loopResult = products.forEach((product) => {
    console.log(product)
})

console.log(loopResult)//undefined

// ----------------------------------------------------------------
let numbers = [1, 2, 3, 4, 5, 6]

numbers.forEach((number) => {
    number % 2 === 0 ? console.log("even") : console.log("odd")
})

// ----------------------------------------------------------------
products.forEach((product) => {
    product.discount = "50%"
})

console.log(products)