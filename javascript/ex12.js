const user = {
    name: "John",
    event: "Music Fest"
};

setTimeout(() => {

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log("Registration Successful");
        console.log(data);
    })
    .catch(error => {
        console.log("Registration Failed");
    });

}, 2000);