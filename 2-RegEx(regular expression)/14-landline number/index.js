const landlineNumber = prompt("please enter a landline number", "083-46223152")

const landlineNumberRegex = /^(0[1-9]{2,3})-(\d{8})$/

const result = landlineNumberRegex.test(landlineNumber)

if (result) alert("thanks"); else alert("Invalid landline number")

