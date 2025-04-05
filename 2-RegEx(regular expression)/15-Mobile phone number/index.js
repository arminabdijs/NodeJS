const mobilePhoneNumber = prompt("please enter a Mobile phone number", "0918-537-9901")

const mobilePhoneNumberRegex = /^(09(1[0-9]|2[012]|3[035-9]|9[0-4]|0[0-5]))-(\d{3})-(\d{4})$/

const result = mobilePhoneNumberRegex.test(mobilePhoneNumber)

if (result) alert("thanks"); else alert("Invalid landline number")

