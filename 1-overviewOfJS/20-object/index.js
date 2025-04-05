let userObject = {
    name: "John Doe",
    age: 30,
    city: "New York"
}//key - value pair

console.log(userObject);

console.log(userObject.name);

console.log(userObject["age"])


// Add a new property to the object
userObject.job = "Software Engineer";

console.log(userObject);


// Update an existing property
userObject.age = 31;

console.log(userObject);


// Delete a property
delete userObject.city;

console.log(userObject);


// Check if a property exists in the object
console.log("name" in userObject); // true
console.log("salary" in userObject); // false


// Get all the keys of the object
console.log(Object.keys(userObject));


// Get all the values of the object
console.log(Object.values(userObject));
