let events = [];

function addEvent(name, category) {
    events.push({ name, category });
}

function registerUser(eventName) {
    console.log(`Registered for ${eventName}`);
}

function filterEventsByCategory(category, callback) {
    let filtered = events.filter(
        event => event.category === category
    );

    callback(filtered);
}

function registrationCounter() {
    let count = 0;

    return function () {
        count++;
        console.log(`Total Registrations: ${count}`);
    };
}

const counter = registrationCounter();

addEvent("Music Fest", "Music");
addEvent("Coding Workshop", "Education");

registerUser("Music Fest");

counter();
counter();

filterEventsByCategory("Music", function(result) {
    console.log(result);
});