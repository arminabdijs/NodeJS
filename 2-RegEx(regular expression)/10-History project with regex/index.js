const data = prompt("Please enter your data of birth date", "1400-01-20")

const dateRegexPattern = /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/g


const result=dateRegexPattern.test(data)

if (result) {
    alert("thanks")
}else {
    alert("Invalid date format")
}

