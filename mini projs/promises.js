const myPromise = new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve("Data rejected")
    }, 5000);
});

// request
//     .catch((err) => console.error(err));
//     .then((data) => console.log(data));
    
myPromise.then(data => { data = "what is data?"
console.log("So confuse with this data", data);
}).catch(event => {
    throw new Error(event);
});

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    console.log(json);
  });