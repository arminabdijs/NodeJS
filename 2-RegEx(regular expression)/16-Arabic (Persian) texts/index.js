//https://regex101.com/
const name = prompt("enter your name")

const nameRegex = /^[آا-ی]{4,12}$/

const result = nameRegex.test(name)

if (result) alert(name); else alert("your name is invalid")