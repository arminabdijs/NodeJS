const comment = prompt("please enter a comment : ")
const commentRegexPattern = /:\)/g

const commentReplace = comment.replace(commentRegexPattern, "😂")

console.log(commentReplace)