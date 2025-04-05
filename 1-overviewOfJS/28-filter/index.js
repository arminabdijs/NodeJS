let list = [1, 2, 3, 4, 5, 6]

let filterList = list.filter((item) => {
    return item % 2 === 0
})

console.log(filterList)