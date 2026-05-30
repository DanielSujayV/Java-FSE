document.getElementById("regForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = this.elements["name"].value;
    let email = this.elements["email"].value;
    let selectedEvent = this.elements["event"].value;

    if (name === "" || email === "") {
        document.getElementById("error")
        .textContent = "All fields are required";
        return;
    }

    console.log(name, email, selectedEvent);
});