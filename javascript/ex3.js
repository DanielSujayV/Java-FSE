let events=[
    {
        name:"Cleanup", date:"2026-04-11", seats:20
    },
    { name:"Music", date:"2026-11-1", seats:25
    },
    {
        name:"Coding", date:"2026-04-15", seats:0
    }
];
let today=new Date();
events.forEach(event=>{
    let eventDate=new Date(event.date);
    if(eventDate>today && event.seats>=0){
        console.log(`Registrations available for ${event.seats} seats`);
    }
    else{console.log('Registrations closed');

    }


});
function registration(event){
    try{
        if(event.seats<=0){
           throw new Error("Seats unavailable");

        }
        event.seats--;
        console.log('Registration successful' );
    }

    
    catch(error){
        console.log("Error:",error.message);
    }
}
registration(events[0]);
registration(events[2]);