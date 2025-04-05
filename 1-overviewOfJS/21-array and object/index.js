let users = [
    {id: 1, name: 'John Doe', email: 'johndoe@example.com', comments: [{id: 1, body: "you have a nice job"}]},
    {id: 2, name: 'Jane Smith', email: 'janesmith@example.com', comments: [{id: 2, body: "you have a nice job"}]},
    {id: 3, name: 'Alice Johnson', email: 'alicejohnson@example.com', comments: [{id: 3, body: "you have a nice job"}]},
    {id: 4, name: 'Bob Brown', email: 'bobbrwon@example.com', comments: [{id: 4, body: "you have a nice job"}]},
];

console.log(users[1])
console.log(users[1].name)
console.log(users[1]["name"])
console.log(users[1].comments)
