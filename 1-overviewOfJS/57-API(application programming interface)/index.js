//Get Request API
// https://jsonplaceholder.org/posts
// get all data
/*
fetch('https://jsonplaceholder.org/posts')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
*/

//get single data
/*
fetch('https://jsonplaceholder.org/posts/12')
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error('Error:', error));

*/

//------------------------------------------------------------------------
//Get Request localhost
// BaseURL = "http://localhost:8080"
fetch("http://localhost:8080/courses")
    .then((res) => res.text())
    .then((data) => console.log(data))
    .catch(err => console.log(err))