const email=prompt("Please enter your email")

const  emailRegex = /(\w+[\.-]?\w*)@(\w{5})\.(\w{3})/g

const result=emailRegex.test(email)

if(result)alert(email);else alert("email not invalid")