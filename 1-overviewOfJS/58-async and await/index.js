// Async
/*async function f() {
    return 1;
}//return a promise

f().then(console.log);*/

/*async function f1() {
    return Promise.resolve(1);
}

f1().then(console.log); // 1*/


// Async/await
/*async function f3() {

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!"), 1000)
    });

    let result = await promise; // wait for promise completion

    console.log(result); // "done!"
}

f3();*/

//error use await in function
/*function g() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error("Something went wrong!")), 1000)
    });

    let result = await promise; // wait for promise completion
    console.log(result);

}*/


//anonymous function async/await
/*(async () => {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error("Something went wrong!")), 1000)
    });

    let result = await promise; // wait for promise completion
    console.log(result);
})();*/


//----------------------------------------------------------------
//get API promise
/*const fetchData = () => {
    fetch("https://jsonplaceholder.org/posts")
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err))
}
fetchData()*/


// handler Error
/*async function handlerError() {
    throw new Error("Whoops!");
}
handlerError()*/


// try/catch
/*async function f5() {

    try {
        let response = await fetch('https://jsonplaceholder.org');
    } catch(err) {
         console.log(err);
    }
}

f5();*/


/*async function f6() {
    let results = await Promise.all([
        fetch("url1"),
        fetch("url2"),
    ]);
}

f6();*/

//----------------------------------------------------------------
//get api Async/await
/*async function fetchData() {
    const response = await fetch("https://jsonplaceholder.org/posts/10")
    const data = await response.json()
    console.log(data)
}*/
/*

const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.org/posts/10")
    const data = await response.json()
    console.log(data)
}

fetchData()*/
