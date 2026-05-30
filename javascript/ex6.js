let events = [
    "Music Festival",
    "Baking Workshop",
    "Music Concert"
];

events.push("Art Exhibition");

let musicEvents = events.filter(
    event => event.includes("Music")
);

console.log(musicEvents);

let displayCards = events.map(
    event => `Event Card: ${event}`
);

console.log(displayCards);