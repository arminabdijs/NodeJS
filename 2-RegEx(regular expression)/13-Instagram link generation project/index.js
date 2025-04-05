const text = "I am learning Regex from @arminabdijs and @red_front and @green_front"
const linkRegex = /@([\w\.])+/g

const newText = text.replace(linkRegex, (result) => {
    console.log(result)
    return `<a href="https://instagram.com/${result}">${result}</a>`

})

console.log(newText)


//template Literal:
console.log(`template Literal: Regex: ${text}`)