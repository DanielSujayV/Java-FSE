const container = document.querySelector("#eventContainer");

const card = document.createElement("div");
card.textContent = "Music Festival";

container.appendChild(card);

function register() {
    card.textContent = "Registered for Music Festival";
}

function cancel() {
    card.textContent = "Registration Cancelled";
}