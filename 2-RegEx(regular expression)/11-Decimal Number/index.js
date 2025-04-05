const data =prompt("enter your number")
const validateData =/^[-+]?(\d*\.)?\d+$/g

const result =validateData.test(data)
console.log(data)
if (result){
    alert("ok")
}else {
    alert("not ok")
}