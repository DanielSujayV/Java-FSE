const events = [
    {
        name: "Music Fest",
        category: "Music"
    }
];

function showEvent(eventName = "Unknown Event") {
    console.log(eventName);
}

showEvent();

const { name, category } = events[0];

console.log(name);
console.log(category);

const copiedEvents = [...events];

console.log(copiedEvents);