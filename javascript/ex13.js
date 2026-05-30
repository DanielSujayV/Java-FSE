function submitForm() {

    console.log("Step 1: Form Submitted");

    let user = {
        name: "John"
    };

    console.log("Step 2: User Object", user);

    console.log("Step 3: Sending Fetch Request");

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log("Step 4: Success", data);
    });
}

submitForm();